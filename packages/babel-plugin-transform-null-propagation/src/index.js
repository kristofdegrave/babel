export default function ({ types: t }) {
  return {
    visitor: {
      MemberExpression(path) {
        if (!path.node.object.nullPropagation) {
          return;
        }
        path.replaceWith(
          t.conditionalExpression(
            t.binaryExpression("===", path.node.object, t.identifier("undefined")),
            t.identifier("undefined"),
            t.MemberExpression(path.node.object, path.node.property, path.node.computed)
          )
        );
      }
    }
  };
}
