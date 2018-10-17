
export const RoleSchema = {
  name: 'Role',
  primaryKey: 'name',
  properties: {
    name: 'string',
  }
};

export const StatusSchema = {
  name: 'Status',
  properties: {
    name: {type: 'string', indexed: true },
  }
};

export const ProvinceSchema = {
  name: 'Province',
  properties: {
    name: {type: 'string', indexed: true },
  }
};

export const CitySchema = {
  name: 'City',
  properties: {
    name: {type: 'string', indexed: true },
  }
};

export const RegionSchema = {
  name: 'Region',
  properties: {
    name: {type: 'string', indexed: true },
  }
};

export const CommunitySchema = {
  name: 'Community',
  properties: {
    name: {type: 'string', indexed: true },
    region: 'Region',
  }
};

export const MemberSchema = {
  name: 'Member',
  primaryKey: 'account',
  properties: {
    account: 'string',
    photo: 'string?',
    status: 'Status',
    message: 'string?',
    community: 'Community',
    address: 'string',
    city: 'City',
    province: 'Province',
  }
};

export const UserSchema = {
  name: 'User',
  primaryKey: 'account',
  properties: {
    account: 'string',
    password: 'string',
    mqttId: 'string',
    mqttPsw: 'string',
    topic: 'string[]',
    photo: 'string?',
    status: 'Status?',
    message: 'string?',
    role: 'Role[]',
    community: 'Community',
    address: 'string',
    city: 'City',
    province: 'Province',
  }
};

export const MessageSchema = {
  name: 'Message',
  properties: {
    topic: 'string',
    sender: {type: 'string', indexed: true },
    date: 'date',
    content: 'string',
  }
};

export const TokenSchema = {
  name: 'Token',
  properties: {
    token: 'string',
  }
};