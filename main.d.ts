// Type definitions for alanning:roles.
// Project: https://atmospherejs.com/alanning/roles
// Definitions by:
// Dave Allen <https://github.com/fullflavedave>

interface RolesDAO {
  _id?: string;
  name?: string;
}

declare module Roles {

  function createRole(roleName: string): string;
  function deleteRole(roleName: string): void;
  function addUsersToRoles(users: any, roles: string | Array<string>, group?: string): void;
  function setUserRoles(users: any, roles: string | Array<string>, group?: string): void;
  function removeUsersFromRoles(users: any, roles: string | Array<string>, group?: string): void;
  function userIsInRole(user: any, roles: string | Array<string>, group?: string): boolean;
  function getRolesForUser(userId: any): string[];
  function getAllRoles(): Mongo.Cursor<RolesDAO>;
  function getUsersInRole(role: any, group?: string, options?: any): Mongo.Cursor<RolesDAO>;
  function getGroupsForUser(user: any, role?: string): Array<any>;

  var GLOBAL_GROUP: string;
}
