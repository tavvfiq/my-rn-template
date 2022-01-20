export interface UserI {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressI;
  phone: string;
  website: string;
  company: CompanyI;
}

export interface AddressI {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeolocationI;
}

export interface GeolocationI {
  lat: string;
  lng: string;
}

export interface CompanyI {
  name: string;
  catchPhrase: string;
  bs: string;
}

class User implements UserI {
  id: number = 0;
  name: string = '';
  username: string = '';
  email: string = '';
  address!: AddressI;
  phone: string = '';
  website: string = '';
  company!: CompanyI;
  constructor(user: UserI) {
    Object.assign(this, user);
  }

  toJson() {
    const { ...properties } = this;
    return properties;
  }
}

export default User;
