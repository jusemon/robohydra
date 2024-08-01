var RoboHydraHeadStatic =
  require("@jusemon/robohydra").heads.RoboHydraHeadStatic;

exports.getBodyParts = function () {
  return {
    heads: [
      new RoboHydraHeadStatic({
        path: "/.*",
        content: "/usr version",
      }),
    ],
  };
};
