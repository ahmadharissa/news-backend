import user from "./models/user.js";
import location from "./models/location.js";
import role from "./models/role.js";

// user - location
location.hasMany(user, {
  foreignKey: { name: "locationId" },
});
user.belongsTo(location, {
  foreignKey: "locationId",
});

// user - role
role.hasMany(user, {
  foreignKey: { name: "roleId" },
});
user.belongsTo(role, {
  foreignKey: "roleId",
});