import React, { useState, useEffect, useRef } from "react";

function NavigationMenu({ items }) {
  const [visibleItems, setVisibleItems] = useState(items.length);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null); // Reference to menu container element

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
      setIsMobile(isMobile);
      setVisibleItems(isMobile ? calculateVisibleItems(items) : items.length);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [items]);

  const calculateVisibleItems = (items) => {
    if (!menuRef.current) return items.length; // Handle initial render

    const menuWidth = menuRef.current.clientWidth; // Get menu container width
    const itemWidth = getItemWidth(items); // More robust item width calculation

    // Consider padding, margin, and potential scrollbar width
    const availableWidth = menuWidth - getMenuPaddingAndMargins();

    return Math.min(items.length, Math.floor(availableWidth / itemWidth));
  };

  const getItemWidth = (items) => {
    // Improved item width estimation (consider padding, margin)
    const sampleItem = menuRef.current.querySelector("li"); // Get a sample item
    if (!sampleItem) return 100; // Default value (adjust)

    const itemStyle = window.getComputedStyle(sampleItem);
    const paddingLeft = parseFloat(itemStyle.paddingLeft);
    const paddingRight = parseFloat(itemStyle.paddingRight);
    const marginLeft = parseFloat(itemStyle.marginLeft);
    const marginRight = parseFloat(itemStyle.marginRight);

    return (
      sampleItem.offsetWidth +
      paddingLeft +
      paddingRight +
      marginLeft +
      marginRight
    );
  };

  const getMenuPaddingAndMargins = () => {
    const menuStyle = window.getComputedStyle(menuRef.current);
    const paddingLeft = parseFloat(menuStyle.paddingLeft);
    const paddingRight = parseFloat(menuStyle.paddingRight);
    const marginLeft = parseFloat(menuStyle.marginLeft);
    const marginRight = parseFloat(menuStyle.marginRight);

    return paddingLeft + paddingRight + marginLeft + marginRight;
  };

  return (
    <nav ref={menuRef} className={isMobile ? "mobile-menu" : "desktop-menu"}>
      <ul>
        {items.slice(0, visibleItems).map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.name}</a>
            {!isMobile && <span className="item-description">{item.description}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationMenu;

