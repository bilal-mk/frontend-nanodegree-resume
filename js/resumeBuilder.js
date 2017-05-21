var name = "Bilal MK"
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Solutions Architect & Lead DevOps Engineer"
var formattedRole = HTMLheaderRole.replace("%data%", role)

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);