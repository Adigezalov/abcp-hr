import React from 'react'

import { IButtonProps } from '@/types/types'

export const Button: React.FC<IButtonProps> = React.memo(({ onClick }) => {
	return (
		<button type='button' onClick={onClick}>
			Get random user
		</button>
	)
})
