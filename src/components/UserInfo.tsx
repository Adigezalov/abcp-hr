import React, { FC } from 'react'

import { IUserInfoProps } from '@/types/types'

export const UserInfo: FC<IUserInfoProps> = React.memo(({ user }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Username</th>
					<th>Phone number</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{user.name}</td>
					<td>{user.phone}</td>
				</tr>
			</tbody>
		</table>
	)
})
