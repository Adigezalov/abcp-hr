import React, { useState } from 'react'

import { useThrottle } from '@/hooks/useTrottle'
import { UserInfo } from '@/components/UserInfo'
import { Button } from '@/components/Button'
import { User } from '@/types/types'

const URL = 'https://jsonplaceholder.typicode.com/users'

export const App = () => {
	const [user, setUser] = useState<User | null>(null)

	const receiveRandomUser = async () => {
		try {
			const id = Math.floor(Math.random() * 10) + 1
			const response = await fetch(`${URL}/${id}`)
			if (!response.ok) {
				throw new Error('Failed to fetch user')
			}
			const _user = (await response.json()) as User
			setUser(_user)
		} catch (error) {
			console.error('Error fetching user:', error)
		}
	}

	const handleButtonClick = useThrottle(() => {
		receiveRandomUser().then()
	}, 5000)

	return (
		<div>
			<header>Get a random user</header>
			<Button onClick={handleButtonClick} />
			{user && <UserInfo user={user} />}
		</div>
	)
}
