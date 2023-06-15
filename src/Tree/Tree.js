import TreeNode from "./TreeNode";

export default function Tree({ list, level = 0 }) {
  const treeNodeList = list.map((node) => (
    <TreeNode key={node.id} node={node} level={level} />
  ));
  return <div>{treeNodeList}</div>;
}
