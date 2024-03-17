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
/**
 * 广度优先遍历 按层级遍历，队列的先进先出特性适合出来这种需求，确保每一层级的节点都按照顺序访问和处理
 *
 * @export
 * @param {NodeProps} node
 */
export function bfs(node: NodeProps) {
  const queue = [node]
  while (queue.length > 0) {
    const currNode = queue.shift()
    console.log(currNode?.value)
    if (currNode?.children) {
      currNode.children.forEach(child => {
        queue.push(child)
      })
    }
  }
}
bfs(rootnode)