import { FaExternalLinkAlt, FaFigma, FaGithub } from "react-icons/fa"

const items = [
  {
    id: 1,
    title: "Restaurant",
    img: "/res.jpg",
    imgs: ["/res.jpg", "/res2.jpg", "/res3.jpg"],
    url: "/portfolio/Restaurant",
    desc: [
      "A fully responsive restaurant website featuring an interactive menu with categorized dishes, online reservation system, and a stunning food gallery designed to attract and engage customers from the first click.",
      "Built with performance and UX in mind, the platform supports real-time table availability updates, customer reviews, and a chef's special section that rotates weekly — keeping regulars coming back and new visitors curious. Each dish is presented with high-quality photography, detailed ingredient lists, allergen information, and preparation time estimates, giving diners full confidence before they even step through the door. The reservation system sends automated SMS and email confirmations, reducing no-shows and helping the front-of-house team stay organized during peak hours. Customers can also filter the menu by dietary preferences such as vegan, gluten-free, or halal, making the experience inclusive and accessible to every type of guest.",
      "The admin dashboard allows restaurant owners to manage bookings, update menu items with photos and pricing, track customer feedback, and run promotional campaigns — all from a single, easy-to-use interface. Owners can set up time-limited offers, happy hour discounts, and seasonal specials with just a few clicks, without needing any technical knowledge. The analytics panel provides a clear breakdown of peak dining hours, most ordered dishes, and revenue trends across daily, weekly, and monthly views — empowering smarter decisions around staffing, inventory, and marketing. Push notifications can be sent directly to subscribed customers to announce new dishes, events, or exclusive deals, turning the website into a powerful retention and engagement tool.",
    ],
    links: [
      { label: "Live Site",  href: "https://restaurant-demo.vercel.app", icon: "live"   },
      { label: "GitHub",     href: "https://github.com/your/restaurant",  icon: "github" },
      { label: "Figma",      href: "https://figma.com/your/restaurant",   icon: "figma"  },
    ],
  },
  {
    id: 2,
    title: "Hotel",
    img: "/hot.jpg",
    imgs: ["/hot.jpg", "/hot2.jpg", "/hot3.jpg"],
    url: "/portfolio/Hotel",
    desc: [
      "A luxury hotel booking platform with room availability calendars, dynamic pricing tiers, and a visually rich presentation of suites, amenities, and services tailored to high-end travelers.",
      "Guests can browse room categories, read verified reviews, explore the hotel's spa, dining, and event facilities, and complete their booking through a seamless multi-step checkout with secure payment integration. Every room page features a full virtual tour, a curated list of included amenities, bed configuration options, and a live availability calendar that updates in real time to prevent double bookings. The platform supports multi-currency pricing and multilingual content, making it accessible to international travelers from over 50 countries. Guests can also add special requests during checkout — such as airport transfers, early check-in, or room decoration for special occasions — creating a truly personalized stay from the very first interaction.",
      "Hotel staff benefit from a powerful back-office panel to manage reservations, adjust room inventory, send automated confirmation emails, and generate occupancy and revenue reports on demand. The system integrates with major channel managers and OTAs like Booking.com and Expedia, syncing availability in real time to eliminate overbooking risks across all platforms. Housekeeping teams receive automated room status updates through a dedicated mobile view, while the front desk gets a unified dashboard showing arrivals, departures, and special guest notes for each day. Revenue managers can apply dynamic pricing rules based on seasonality, occupancy thresholds, or competitor rates — ensuring the hotel always maximizes yield without manual intervention.",
    ],
    links: [
      { label: "Live Site",  href: "https://hotel-demo.vercel.app", icon: "live"   },
      { label: "GitHub",     href: "https://github.com/your/hotel",  icon: "github" },
      { label: "Figma",      href: "https://figma.com/your/hotel",   icon: "figma"  },
    ],
  },
  {
    id: 3,
    title: "Café",
    img: "/cafe.webp",
    imgs: ["/cafe.webp", "/cafe2.webp", "/cafe3.webp"],
    url: "/portfolio/Cafe",
    desc: [
      "A cozy and inviting café website with a daily specials board, seasonal drink menu, and an ambient photo gallery that captures the warmth and character of the café's unique interior and handcrafted beverages.",
      "Customers can sign up for the loyalty program, pre-order their favorite drinks, browse upcoming events like live music nights or coffee tasting workshops, and leave reviews that help build a vibrant community. The pre-order system allows regulars to schedule their morning coffee for a specific pickup time, cutting wait times during the busy morning rush and improving the overall customer experience. Each drink on the menu comes with a detailed origin story — from the farm where the beans were sourced to the roasting method used — giving coffee enthusiasts the depth they crave. The loyalty program automatically tracks purchases and rewards customers with free drinks, exclusive merchandise, or early access to seasonal menus, driving repeat visits and long-term brand attachment.",
      "The café owner can manage the menu, post announcements, update event schedules, and monitor loyalty points redemptions — all through a lightweight and intuitive content management panel built for non-technical users. The events module lets staff publish new workshops or performances in minutes, complete with ticketing, capacity limits, and automated waitlist management when spots fill up. Built-in SEO tools ensure the café ranks highly in local search results, helping attract nearby customers searching for specialty coffee or weekend brunch spots. Detailed reports on peak hours, best-selling items, and loyalty program engagement give owners the insights they need to grow revenue, reduce waste, and build a stronger neighborhood presence.",
    ],
    links: [
      { label: "Live Site",  href: "https://cafe-demo.vercel.app", icon: "live"   },
      { label: "GitHub",     href: "https://github.com/your/cafe",  icon: "github" },
      { label: "Figma",      href: "https://figma.com/your/cafe",   icon: "figma"  },
    ],
  },
  {
    id: 4,
    title: "E-Commerce",
    img: "/eco.webp",
    imgs: ["/eco.webp", "/eco2.webp", "/eco3.webp"],
    url: "/portfolio/Ecommerce",
    desc: [
      "A modern and scalable e-commerce store with advanced product filtering, a dynamic cart system, wishlist functionality, and a polished storefront designed to convert browsers into buyers from the very first visit.",
      "Shoppers enjoy a smooth experience with real-time stock updates, product image zoom, size and color variants, customer ratings, and a fast one-page checkout powered by secure payment gateways including Stripe and PayPal. The recommendation engine surfaces related products based on browsing history and purchase patterns, increasing average order value through intelligent upselling and cross-selling without ever feeling pushy. Customers can track their orders in real time through a dedicated tracking page that pulls live updates from integrated courier APIs, reducing support inquiries and building post-purchase confidence. The platform also supports flash sales, bundle deals, and limited-time coupon codes that create urgency and drive conversions during key shopping events like Black Friday or seasonal promotions.",
      "Store owners get a full-featured admin dashboard to manage products, categories, discount codes, and shipping rules — plus detailed analytics on sales performance, top products, and customer behavior to drive growth. The inventory system sends low-stock alerts and can automatically pause listings when items sell out, preventing overselling and protecting the store's reputation for reliability. Multi-vendor support allows the platform to scale into a marketplace, where independent sellers can list their own products, manage their storefronts, and receive automated payouts — all under one unified brand. Marketing tools built directly into the dashboard let owners run email campaigns, retargeting ads, and affiliate programs without needing third-party subscriptions, keeping operational costs lean as the business scales.",
    ],
    links: [
      { label: "Live Site",  href: "https://ecommerce-demo.vercel.app", icon: "live"   },
      { label: "GitHub",     href: "https://github.com/your/ecommerce",  icon: "github" },
      { label: "Figma",      href: "https://figma.com/your/ecommerce",   icon: "figma"  },
    ],
  },
]

// icon map
const iconMap = {
  live: <FaExternalLinkAlt className="text-sm" />,
  github: <FaGithub className="text-lg" />,
  figma: <FaFigma className="text-lg" />,
}

const styleMap = {
  live: "bg-blue-600 hover:bg-blue-700 text-white",
  github: "bg-zinc-800 hover:bg-zinc-700 text-white",
  figma: "bg-purple-600 hover:bg-purple-700 text-white",
}

export  {items, styleMap , iconMap}