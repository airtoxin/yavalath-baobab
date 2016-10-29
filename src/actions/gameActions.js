export function start(tree) {
  tree.set(["game", "started"], true);
  tree.set(["turnPlayer"], tree.get("players", 0));
  tree.commit();
}
