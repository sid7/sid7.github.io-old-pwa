import React from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export const A = ({ children, ...props }) => <a {...props}>{children}</a>;
A.defaultProps = {
  target: "_blank"
};

export const Lst = ({ name, children, type, ...props }) => (
  <dl {...props}>
    <dt>{name}</dt>
    {type === "fa" &&
      Object.entries(children).map(([a, b], i) => (
        <dd key={i}>
          <I icon={["fab", a]} fixedWidth /> {b}
        </dd>
      ))}
    {type !== "fa" &&
      Object.entries(children).map(([n, l], i) => (
        <dd key={i}>
          <A href={l}>{n}</A>
        </dd>
      ))}
    {/* {typeof children === "object"
      ? Object.entries(children).map(([n, l], i) => (
          <dd key={i}>
            <A href={l}>{n}</A>
          </dd>
        ))
      : children.map((c, i) => <A key={i}>{c}</A>)} */}
  </dl>
);

export const Stamp = ({ url, name, icon, fa = "fab" }) => (
  <A className="stamp" href={url}>
    <I className="stamp-icon" icon={[fa, icon]} fixedWidth />
    <span className="stamp-title">{name}</span>
  </A>
);
