import Tree from "./Tree";

import styles from "./tree.module.css";

export default function TreeContainer({ list = [], level = 0 }) {
  return (
    <div className={styles.treeContainer}>
      {list.length ? <Tree list={list} level={level} /> : <p>No data found.</p>}
    </div>
  );
}
