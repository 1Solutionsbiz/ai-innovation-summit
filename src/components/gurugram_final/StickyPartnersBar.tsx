import React from "react";
import { partners } from "@/data/partners";

const StickyPartnersBar = () => {
  if (!partners.length) return null;

  // Ek set render karne ka function. Clone set mobile marquee ke seamless loop ke liye hai.
  const renderSet = (prefix: string, isClone = false) => (
    <div
      className={`sticky-partners-set ${isClone ? "sticky-partners-set--clone" : ""}`}
      aria-hidden={isClone}
    >
      {partners.map((partner, index) => (
        <React.Fragment key={`${prefix}-${index}`}>
          <div className="sticky-partner-item">
            <h3 className="sticky-partner-title">{partner.title}</h3>
            <img src={partner.image} alt={isClone ? "" : partner.alt} />
          </div>
          <div className="sticky-partner-divider" />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="sticky-partners-bar">
      <div className="sticky-partners-inner">
        <div
          className="sticky-partners-track"
          style={
            {
              // partners zyada hon to speed apne aap adjust hogi
              "--marquee-duration": `${Math.max(15, partners.length * 8)}s`,
            } as React.CSSProperties
          }
        >
          {renderSet("a")}
          {renderSet("b", true)}
        </div>
      </div>
    </div>
  );
};

export default StickyPartnersBar;