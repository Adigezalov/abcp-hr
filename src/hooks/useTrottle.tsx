import { useEffect, useRef, useCallback } from 'react'

export const useThrottle = <T extends (...args: any[]) => void>(callback: T, delay: number): T => {
	const timeout = useRef<NodeJS.Timeout | null>(null)
	const lastRan = useRef<number>(Date.now())

	const throttledCallback = useCallback(
		(...args: any[]) => {
			const now = Date.now()
			const timeElapsed = now - lastRan.current
			if (timeElapsed < delay) {
				if (timeout.current) {
					clearTimeout(timeout.current)
				}
				timeout.current = setTimeout(() => {
					lastRan.current = now
					callback(...args)
				}, delay - timeElapsed)
			} else {
				lastRan.current = now
				callback(...args)
			}
		},
		[callback, delay],
	) as T

	useEffect(() => {
		return () => {
			if (timeout.current) {
				clearTimeout(timeout.current)
			}
		}
	}, [])

	return throttledCallback
}
