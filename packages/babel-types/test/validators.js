import * as t from "../lib";
import assert from "assert";
import { parse } from "babylon";

suite("validators", function () {
  suite("isNodesEquivalent", function () {
    it("should handle simple cases", function () {
      const mem = t.memberExpression(t.identifier("a"), t.identifier("b"));
      assert(t.isNodesEquivalent(mem, mem) === true);

      const mem2 = t.memberExpression(t.identifier("a"), t.identifier("c"));
      assert(t.isNodesEquivalent(mem, mem2) === false);
    });

    it("should handle full programs", function () {
      assert(t.isNodesEquivalent(parse("1 + 1"), parse("1+1")) === true);
      assert(t.isNodesEquivalent(parse("1 + 1"), parse("1+2")) === false);
    });

    it("should handle complex programs", function () {
      const program = "'use strict'; function lol() { wow();return 1; }";

      assert(t.isNodesEquivalent(parse(program), parse(program)) === true);

      const program2 = "'use strict'; function lol() { wow();return -1; }";

      assert(t.isNodesEquivalent(parse(program), parse(program2)) === false);
    });
  });
});
