type Company = {
	bs: string
	catchPhrase: string
	name: string
}

type Address = {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geo
}

type Geo = {
	lat: string
	lng: string
}

export type User = {
	id: number
	email: string
	name: string
	phone: string
	username: string
	website: string
	company: Company
	address: Address
}

export interface IButtonProps {
	onClick: () => void
}

export interface IUserInfoProps {
	user: User
}
