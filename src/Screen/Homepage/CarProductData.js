const CarProductData = [
  {
    id: 1,
    name: "Mercedes-Benz C-Class",
    type: "New",
    price: "$50,000",
    rating: 4.5,
    image: require("../../../assets/cars/1.png"),
    description:
      "The Mercedes-Benz C-Class is a luxury sedan known for its elegant design, powerful performance, and advanced technology. With its sleek lines and premium features, the C-Class offers a comfortable and stylish driving experience. It combines luxury and sportiness, making it a popular choice among car enthusiasts.",
    store: {
      name: "Luxury Auto Dealership",
      tagline: "Exquisite Cars for Discerning Drivers",
      logo: require("../../../assets/carsLogo/mercedesIcon.png")
    },
    order: {
      orderColor: "#FF0000",
      orderColorName: "Red",
      orderStatus: "Completed"
    }
  },
  {
    id: 2,
    name: "BMW 3 Series",
    type: "New",
    price: "$45,000",
    rating: 4.3,
    image: require("../../../assets/cars/2.png"),
    description:
      "The BMW 3 Series is a luxury sedan that combines sportiness, elegance, and advanced technology. With its dynamic performance and luxurious features, the 3 Series offers a thrilling driving experience. It is a popular choice for those seeking a balance between comfort and performance.",
    store: {
      name: "Luxury Auto Dealership",
      tagline: "Exquisite Cars for Discerning Drivers",
      logo: require("../../../assets/carsLogo/bmwIcon.png")
    },
    order: {
      orderColor: "#00FF00",
      orderColorName: "Green",
      orderStatus: "Completed"
    }
  },
  {
    id: 3,
    name: "Audi A4",
    type: "New",
    price: "$42,000",
    rating: 4.2,
    image: require("../../../assets/cars/3.png"),
    description:
      "The Audi A4 is a luxury sedan known for its sophisticated design, advanced technology, and exceptional performance. With its elegant styling and cutting-edge features, the A4 offers a comfortable and enjoyable driving experience. It is a popular choice among those who value both style and substance.",
    store: {
      name: "Luxury Auto Dealership",
      tagline: "Exquisite Cars for Discerning Drivers",
      logo: require("../../../assets/carsLogo/audi.png")
    },
    order: {
      orderColor: "#0000FF",
      orderColorName: "Blue",
      orderStatus: "Completed"
    }
  },
  {
    id: 4,
    name: "Lexus ES",
    type: "New",
    price: "$47,000",
    rating: 4.4,
    image: require("../../../assets/cars/4.png"),
    description:
      "The Lexus ES is a luxury sedan known for its refined craftsmanship, advanced technology, and comfortable ride. With its spacious interior and smooth performance, the ES offers a premium driving experience. It is a popular choice for those who prioritize comfort and elegance.",
    store: {
      name: "Luxury Auto Dealership",
      tagline: "Exquisite Cars for Discerning Drivers",
      logo: require("../../../assets/carsLogo/lexus.png")
    },
    order: {
      orderColor: "#FFFF00",
      orderColorName: "Yellow",
      orderStatus: "Completed"
    }
  },
  {
    id: 5,
    name: "Volvo S60",
    type: "New",
    price: "$40,000",
    rating: 4.1,
    image: require("../../../assets/cars/5.png"),
    description:
      "The Volvo S60 is a luxury sedan known for its stylish design, advanced safety features, and comfortable interior. With its powerful performance and modern amenities, the S60 offers a delightful driving experience. It is a popular choice for those who value safety and Scandinavian elegance.",
    store: {
      name: "Luxury Auto Dealership",
      tagline: "Exquisite Cars for Discerning Drivers",
      logo: require("../../../assets/carsLogo/volvo.png")
    },
    order: {
      orderColor: "#800080",
      orderColorName: "Purple",
      orderStatus: "Completed"
    }
  },
  {
    id: 6,
    name: "Tesla Model 3",
    type: "Electric",
    price: "$55,000",
    rating: 4.8,
    image: require("../../../assets/cars/6.png"),
    description:
      "The Tesla Model 3 is an all-electric sedan known for its impressive range, cutting-edge technology, and sleek design. With its instant acceleration and autopilot features, the Model 3 offers a futuristic driving experience. It is a popular choice for those who prioritize sustainability and innovation.",
    store: {
      name: "Electric Auto Dealership",
      tagline: "Powering the Future of Transportation",
      logo: require("../../../assets/carsLogo/tesla.png")
    },
    order: {
      orderColor: "#008000",
      orderColorName: "Dark Green",
      orderStatus: "Completed"
    }
  },
  {
    id: 7,
    name: "Porsche 911",
    type: "Sports",
    price: "$120,000",
    rating: 4.9,
    image: require("../../../assets/cars/7.png"),
    description:
      "The Porsche 911 is a legendary sports car known for its iconic design, exhilarating performance, and precision engineering. With its powerful engine and agile handling, the 911 offers an unmatched driving experience. It is a dream car for many automotive enthusiasts.",
    store: {
      name: "Sports Car Dealership",
      tagline: "Experience the Thrill of Speed",
      logo: require("../../../assets/carsLogo/bmw.png")
    },
    order: {
      orderColor: "#FFA500",
      orderColorName: "Orange",
      orderStatus: "Completed"
    }
  },
  {
    id: 8,
    name: "Ford Mustang",
    type: "Sports",
    price: "$65,000",
    rating: 4.6,
    image: require("../../../assets/cars/8.png"),
    description:
      "The Ford Mustang is an iconic sports car known for its muscular design, powerful performance, and American heritage. With its V8 engine and aggressive styling, the Mustang offers an exhilarating driving experience. It is a symbol of freedom and adventure.",
    store: {
      name: "Sports Car Dealership",
      tagline: "Experience the Thrill of Speed",
      logo: require("../../../assets/carsLogo/fordIcon.png")
    },
    order: {
      orderColor: "#FFC0CB",
      orderColorName: "Pink",
      orderStatus: "Completed"
    }
  },
  {
    id: 9,
    name: "Chevrolet Camaro",
    type: "Sports",
    price: "$55,000",
    rating: 4.4,
    image: require("../../../assets/cars/2.png"),
    description:
      "The Chevrolet Camaro is a classic sports car known for its bold design, powerful performance, and thrilling driving dynamics. With its aggressive stance and high-performance capabilities, the Camaro offers an adrenaline-pumping experience on the road. It is a symbol of American muscle.",
    store: {
      name: "Sports Car Dealership",
      tagline: "Experience the Thrill of Speed",
      logo: require("../../../assets/carsLogo/bmw.png")
    },
    order: {
      orderColor: "#800000",
      orderColorName: "Maroon",
      orderStatus: "Completed"
    }
  },
  {
    id: 10,
    name: "Mazda MX-5 Miata",
    type: "Sports",
    price: "$35,000",
    rating: 4.3,
    image: require("../../../assets/cars/4.png"),
    description:
      "The Mazda MX-5 Miata is a lightweight sports car known for its agile handling, open-top driving experience, and timeless design. With its responsive performance and driver-focused features, the MX-5 Miata offers pure driving pleasure. It is a popular choice for those who appreciate the joy of driving.",
    store: {
      name: "Sports Car Dealership",
      tagline: "Experience the Thrill of Speed",
      logo: require("../../../assets/carsLogo/honda.png")
    },
    order: {
      orderColor: "#FFD700",
      orderColorName: "Gold",
      orderStatus: "Completed"
    }
  },
  {
    id: 11,
    name: "Toyota Corolla",
    type: "Compact",
    price: "$25,000",
    rating: 4.2,
    image: require("../../../assets/cars/5.png"),
    description:
      "The Toyota Corolla is a compact sedan known for its reliability, fuel efficiency, and practicality. With its comfortable ride and advanced safety features, the Corolla offers a dependable and convenient driving experience. It is one of the best-selling cars worldwide.",
    store: {
      name: "Family Car Dealership",
      tagline: "Quality Cars for Your Family",
      logo: require("../../../assets/carsLogo/toyotaIcon.png")
    },
    order: {
      orderColor: "#808080",
      orderColorName: "Gray",
      orderStatus: "Completed"
    }
  },
  {
    id: 12,
    name: "Honda Civic",
    type: "Compact",
    price: "$27,000",
    rating: 4.1,
    image: require("../../../assets/cars/3.png"),
    description:
      "The Honda Civic is a compact sedan known for its reliability, fuel efficiency, and versatile design. With its spacious interior and advanced technology, the Civic offers a comfortable and connected driving experience. It is a popular choice among those seeking practicality and value.",
    store: {
      name: "Family Car Dealership",
      tagline: "Quality Cars for Your Family",
      logo: require("../../../assets/carsLogo/hondaIcon.png")
    },
    order: {
      orderColor: "#A52A2A",
      orderColorName: "Brown",
      orderStatus: "Complete"
    }
  },
  {
    id: 13,
    name: "Nissan Sentra",
    type: "Compact",
    price: "$23,000",
    rating: 4.0,
    image: require("../../../assets/cars/6.png"),
    description:
      "The Nissan Sentra is a compact sedan known for its practicality, fuel efficiency, and modern design. With its comfortable interior and user-friendly features, the Sentra offers a reliable and convenient driving experience. It is a value-oriented choice for daily commuting.",
    store: {
      name: "Family Car Dealership",
      tagline: "Quality Cars for Your Family",
      logo: require("../../../assets/carsLogo/wolkswagen.png")
    },
    order: {
      orderColor: "#000080",
      orderColorName: "Navy Blue",
      orderStatus: "Completed"
    }
  },
  {
    id: 14,
    name: "Jeep Wrangler",
    type: "SUV",
    price: "$35,000",
    rating: 4.6,
    image: require("../../../assets/cars/8.png"),
    description:
      "The Jeep Wrangler is a legendary SUV known for its off-road capability, rugged design, and open-air driving experience. With its robust construction and versatile features, the Wrangler offers an adventurous and go-anywhere driving experience. It is a symbol of freedom and exploration.",
    store: {
      name: "SUV Dealership",
      tagline: "Unleash Your Adventurous Spirit",
      logo: require("../../../assets/carsLogo/wolkswagen.png")
    },
    order: {
      orderColor: "#8B4513",
      orderColorName: "Saddle Brown",
      orderStatus: "Completed"
    }
  },
  {
    id: 15,
    name: "Ford Explorer",
    type: "SUV",
    price: "$45,000",
    rating: 4.4,
    image: require("../../../assets/cars/6.png"),
    description:
      "The Ford Explorer is a popular SUV known for its spaciousness, comfort, and versatility. With its advanced safety features and modern technology, the Explorer offers a reliable and family-friendly driving experience. It is a go-to choice for those seeking a capable and practical SUV.",
    store: {
      name: "SUV Dealership",
      tagline: "Unleash Your Adventurous Spirit",
      logo: require("../../../assets/carsLogo/fordIcon.png")
    },
    order: {
      orderColor: "#006400",
      orderColorName: "Dark Green",
      orderStatus: "Completed"
    }
  },
  {
    id: 16,
    name: "Toyota RAV4",
    type: "SUV",
    price: "$40,000",
    rating: 4.3,
    image: require("../../../assets/cars/2.png"),
    description:
      "The Toyota RAV4 is a popular SUV known for its reliability, fuel efficiency, and practicality. With its spacious interior and capable performance, the RAV4 offers a comfortable and versatile driving experience. It is a top choice among families and adventure-seekers alike.",
    store: {
      name: "SUV Dealership",
      tagline: "Unleash Your Adventurous Spirit",
      logo: require("../../../assets/carsLogo/bughatti.png")
    },
    order: {
      orderColor: "#4B0082",
      orderColorName: "Indigo",
      orderStatus: "Completed"
    }
  },
  {
    id: 17,
    name: "Honda CR-V",
    type: "SUV",
    price: "$38,000",
    rating: 4.2,
    image: require("../../../assets/cars/5.png"),
    description:
      "The Honda CR-V is a compact SUV known for its reliability, practicality, and comfortable ride. With its spacious cabin and advanced safety features, the CR-V offers a family-friendly and versatile driving experience. It is a popular choice among those seeking a blend of comfort and utility.",
    store: {
      name: "SUV Dealership",
      tagline: "Unleash Your Adventurous Spirit",
      logo: require("../../../assets/carsLogo/hondaIcon.png")
    },
    order: {
      orderColor: "#DC143C",
      orderColorName: "Crimson",
      orderStatus: "Completed"
    }
  },
  {
    id: 18,
    name: "Hyundai Tucson",
    type: "SUV",
    price: "$36,000",
    rating: 4.1,
    image: require("../../../assets/cars/7.png"),
    description:
      "The Hyundai Tucson is a compact SUV known for its stylish design, comfortable interior, and modern features. With its versatile performance and advanced technology, the Tucson offers a reliable and practical driving experience. It is a value-packed choice for urban adventures.",
    store: {
      name: "SUV Dealership",
      tagline: "Unleash Your Adventurous Spirit",
      logo: require("../../../assets/carsLogo/honda.png")
    },
    order: {
      orderColor: "#FF1493",
      orderColorName: "Deep Pink",
      orderStatus: "Completed"
    }
  },
  {
    id: 19,
    name: "Volkswagen Golf",
    type: "Hatchback",
    price: "$30,000",
    rating: 4.0,
    image: require("../../../assets/cars/6.png"),
    description:
      "The Volkswagen Golf is a compact hatchback known for its practicality, sporty performance, and European charm. With its refined interior and agile handling, the Golf offers a fun-to-drive and versatile driving experience. It is a popular choice for urban commuting and weekend adventures.",
    store: {
      name: "Hatchback Dealership",
      tagline: "Efficiency and Style Combined",
      logo: require("../../../assets/carsLogo/kia.png")
    },
    order: {
      orderColor: "#FF4500",
      orderColorName: "Orange Red",
      orderStatus: "Completed"
    }
  },
  {
    id: 20,
    name: "MINI Cooper",
    type: "Hatchback",
    price: "$32,000",
    rating: 4.0,
    image: require("../../../assets/cars/1.png"),
    description:
      "The MINI Cooper is a compact hatchback known for its iconic design, agile handling, and lively performance. With its retro-inspired styling and customizable options, the MINI Cooper offers a unique and exhilarating driving experience. It is a beloved choice for those who appreciate individuality and driving fun.",
    store: {
      name: "Hatchback Dealership",
      tagline: "Efficiency and Style Combined",
      logo: require("../../../assets/carsLogo/audi.png")
    },
    order: {
      orderColor: "#FF00FF",
      orderColorName: "Magenta",
      orderStatus: "Completed"
    }
  }
];

export default CarProductData;
