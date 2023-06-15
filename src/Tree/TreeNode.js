import { useState } from "react";

import Tree from "./Tree";

import styles from "./tree.module.css";

import ArrowRightSVG from "./icons/arrow-right.svg";
import ArrowDownSVG from "./icons/arrow-down.svg";

export default function TreeNode({ node, level = 0 }) {
  const { label, children = [] } = node;

  const [isActive, setIsActive] = useState(false);

  const onActiveToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const hasChildren = !!children?.length;

  return (
    <div
      role='button'
      style={{
        paddingLeft: `${level * 1}rem`,
      }}
    >
      <div
        className={styles.nodeHeader}
        {...(hasChildren
          ? { style: { cursor: "pointer" }, onClick: onActiveToggle }
          : {})}
      >
        {hasChildren && (
          <img
            alt='arrow'
            src={isActive ? ArrowDownSVG : ArrowRightSVG}
            width='12px'
            height='12px'
          />
        )}
        <p>{label}</p>
      </div>
      {hasChildren && isActive ? (
        <Tree list={children} level={level + 1} />
      ) : null}
    </div>
  );
}
