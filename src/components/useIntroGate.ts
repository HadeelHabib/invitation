'use client'

import { useCallback, useSyncExternalStore } from 'react'

const UNLOCKED_EVENT = 'invitation:intro-unlocked'

let unlocked = false
const listeners = new Set<() => void>()

function emit() {
  listeners.forEach(l => l())
  try {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event(UNLOCKED_EVENT))
    }
  } catch {
    /* noop */
  }
}

function subscribeToWindow(onStoreChange: () => void): () => void {
  const onWindowUnlock = () => onStoreChange()
  try {
    window.addEventListener(UNLOCKED_EVENT, onWindowUnlock)
    window.addEventListener('storage', onWindowUnlock)
  } catch {
    /* noop */
  }
  return () => {
    try {
      window.removeEventListener(UNLOCKED_EVENT, onWindowUnlock)
      window.removeEventListener('storage', onWindowUnlock)
    } catch {
      /* noop */
    }
  }
}

export function unlockIntroGate() {
  if (unlocked) return
  unlocked = true
  emit()
}

export function useIntroGate(): { unlocked: boolean; unlock: () => void } {
  const getSnapshot = useCallback(() => unlocked, [])
  const getServerSnapshot = useCallback(() => false, [])
  const subscribe = useCallback((onStoreChange: () => void): (() => void) => {
    listeners.add(onStoreChange)
    const cleanupWindow = subscribeToWindow(onStoreChange)
    return () => {
      listeners.delete(onStoreChange)
      cleanupWindow()
    }
  }, [])

  const externalState = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  return { unlocked: externalState, unlock: unlockIntroGate }
}
