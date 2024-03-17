

interface NodeProps {
  value: string;
  children?: NodeProps[];
}
const rootnode: NodeProps = {
  value: "0",
  children: [
    {
      value: "0-1",
      children: [
        {
          value: "0-1-1",
          children: [
            { value: "0-1-1-1", children: [] },
            { value: "0-1-1-2", children: [] },
          ],
        },
        { value: "0-1-2", children: [] },
      ],
    },
    {
      value: "0-2",
      children: [
        { value: "0-2-1", children: [] },
        { value: "0-2-2", children: [{ value: "0-2-2-1", children: [] }] },
      ],
    },
  ],
};
// 深度优先迭代
export function dfs(node: NodeProps) {
  console.log(node.value);
  if (Array.isArray(node.children) && node.children.length > 0) {
    for (const iterator of node.children) {
      dfs(iterator);
    }
  }
}
dfs(rootnode);


