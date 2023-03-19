import { useState, useEffect } from "react"
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";

export default function Menu(){
    const items =
    {
        APPETIZER: [
            {
            name: "Fugu Mirin Boshi",
            alternativeName: "ふぐ味醂干",
            translatedName: "Dried Puffer Fish",
            price: "$14"
            },
            {
            name: "Eihire",
            alternativeName: "エイヒレ",
            translatedName: "Dried Stingray Fin",
            price: "$14"
            },
            {
            name: "Tatami Iwashi",
            alternativeName: "たたみいわし",
            translatedName: "Dried Baby Sardine Sheets",
            price: "$14"
            },
            {
            name: "Maguro Tataki",
            alternativeName: "まぐろタタキ",
            translatedName: "Lightly Seared Tuna",
            price: "$14"
            },
            {
            name: "Nanban Zuke",
            alternativeName: "南蛮酢け",
            translatedName: "Vinegared Mixed Fish",
            price: "$8"
            },
            {
            name: "Hiya Yako",
            alternativeName: "ひややこ",
            translatedName: "Cold Tofu",
            price: "$6"
            },
            {
            name: "Takowasa",
            alternativeName: "たこわさび",
            translatedName: "Raw Octopus with Wasabi",
            price: "$6"
            },
            {
            name: "Edamame",
            alternativeName: "枝豆",
            translatedName: "Boiled Young Soy Beans",
            price: "$6"
            },
            {
            name: "Yaki Ginnan",
            alternativeName: "焼き銀杏",
            translatedName: "Grilled Ginkgo Nuts",
            price: "$5"
            },
            {
            name: "Piri Kara Kyuri",
            alternativeName: "ピリ辛キュリ",
            translatedName: "Vinegared Cucumber",
            price: "$4"
            },
            {
            name: "Kawahagi Roll",
            alternativeName: "カワハギロール",
            translatedName: "Dried Thread-sail filefish",
            price: "$8"
            },
            {
            name: "Agedashi Tofu",
            alternativeName: "揚げ出し豆腐",
            translatedName: "Fried Tofu Simmered in Dashi Stock",
            price: "$10"
            }
        ],
        SALAD: [
            {
            name: "Potato Sarada",
            alternativeName: "ポテトサラダ",
            translatedName: "Potato Salad",
            price: "$8"
            },
            {
            name: "Daikon Sarada",
            alternativeName: "大根サラダ",
            translatedName: "Radish Salad",
            price: "$8"
            },
            {
            name: "DARK HORSE Salad",
            alternativeName: "(Seasonal)",
            translatedName: "Chef's Selection of Freshest",
            price: "$10"
            }
        ],
        SASHIMI: [
            {
                name: "Sashimi Platter 3 kinds",
                alternativeName: "Sashimi moriawase",
                translatedName: "刺身盛り合わせ",
                price: "$24",
                },
            {
                name: "Sashimi Platter 5 kinds",
                alternativeName: "Sashimi moriawase",
                translatedName: "刺身盛り合わせ",
                price: "$40",
                },
                {
                name: "Maguro",
                alternativeName: "Maguro",
                translatedName: "Tuna",
                price: "$12"
                },
                {
                name: "Salmon",
                alternativeName: "Salmon",
                translatedName: "Salmon",
                price: "$12"
                },
                {
                name: "Yellowtail",
                alternativeName: "Hamachi",
                translatedName: "ハマチ",
                price: "$14"
                },
                {
                name: "Swordfish",
                alternativeName: "Mekajiki",
                translatedName: "メカジキ",
                price: "$14"
                },
                {
                name: "Scallop",
                alternativeName: "Hotate",
                translatedName: "帆立",
                price: "$12"
                },
                {
                name: "Sweet Prawn",
                alternativeName: "Prawn",
                translatedName: "甘海老",
                price: "$12"
                },
                {
                name: "Oysters from Hyogo",
                alternativeName: "Nama Kaki",
                translatedName: "生牡蛎 (兵庫県)",
                price: "$24/half dozen"
                },
        ],
        GRILLED: [
                {
                    name: "Wagyu",
                    alternativeName: "和牛",
                    translatedName: "Japanese Beef",
                    price: "$6/stick"
                },
                {
                    name: "Tori",
                    alternativeName: "とり",
                    translatedName: "Chicken meat",
                    price: "$2/stick"
                },
                {
                    name: "Tebasaki",
                    alternativeName: "手羽先",
                    translatedName: "Chicken Wing",
                    price: "$3/stick"
                },
                {
                    name: "Gyutan",
                    alternativeName: "牛タン",
                    translatedName: "Beef Tongue",
                    price: "$6/stick"
                },
                {
                    name: "Mekajiki",
                    alternativeName: "メカジキ",
                    translatedName: "Swordfish",
                    price: "$6/stick"
                },
                {
                    name: "Ebi",
                    price: "$12/3 sticks",
                    alternativeName: "",
                    translatedName: "Tiger Prawn"
                },
                {
                    name: "Buta Bara",
                    alternativeName: "豚バラ",
                    translatedName: "Pork Belly",
                    price: "$12/3 sticks"
                },
                {
                    name: "Shiitake",
                    alternativeName: "椎茸",
                    translatedName: "Shiitake Mushroom",
                    price: "$2/stick"
                },
                {
                    name: "Hotate Isoyaki",
                    alternativeName: "ホタテ磯焼",
                    translatedName: "Grilled Scallops",
                    price: "$12/2pcs"
                },
                {
                    name: "Unagi Kabayaki",
                    alternativeName: "鰻蒲焼",
                    translatedName: "Grilled Eel",
                    price: "$14"
                },
                {
                    name: "Salmon (Shioyaki/Teriyaki)",
                    alternativeName: "鮭(塩焼き / 照り焼き)",
                    translatedName: "Salmon Salt Grilled / Teriyaki",
                    price: "$14"
                },
                {
                    name: "Salmon Kabuto Shioyaki",
                    alternativeName: "サーモンかぶと塩焼き",
                    translatedName: "Salt Grilled Salmon Head",
                    price: "$14"
                },
                {
                    name: "Hamachi Kama Shioyaki",
                    alternativeName: "",
                    translatedName: "Salt Grilled Yellowtail fish collar",
                    price: "$18"
                },
                {
                    name: "Shima Hokke",
                    alternativeName: "",
                    translatedName: "Grilled Spanish Mackerel",
                    price: "$18"
                },
                {
                    name: "Bacon Wrapped Tomatoes",
                    alternativeName: "",
                    translatedName: "",
                    price: "$12/ 3 sticks"
                },
        ],
        OKONOMIYAKI: [
            {
                name: "Kaisen",
                alternativeName: "",
                translatedName: "Mixed Seafood",
                price: "$15"
                },
                {
                name: "Kaki",
                alternativeName: "",
                translatedName: "Oyster",
                price: "$13"
                },
                {
                name: "Ebi",
                alternativeName: "",
                translatedName: "Prawn",
                price: "$13"
                },
                {
                name: "Ika",
                alternativeName: "",
                translatedName: "Cuttlefish",
                price: "$13"
                },
                {
                name: "Salmon",
                alternativeName: "",
                translatedName: "Salmon",
                price: "$13"
                },
                {
                name: "Yasai",
                alternativeName: "",
                translatedName: "Mixed Vegetables",
                price: "$10"
                },
            ],
        FRIED:[
                {
                name: "Tempura Moriawase",
                alternativeName: "",
                translatedName: "Mixed Tempura",
                price: "$16"
                },
                {
                name: "Ebi Tempura",
                alternativeName: "",
                translatedName: "Prawn Tempura",
                price: "$20"
                },
                {
                name: "Tori Tempura",
                alternativeName: "",
                translatedName: "Chicken Tempura",
                price: "$12"
                },
                {
                name: "Yasai Kakiage",
                alternativeName: "",
                translatedName: "Fried Mixed Vegetables",
                price: "$10"
                },
                {
                name: "Tori Karaage",
                alternativeName: "",
                translatedName: "Japanese Fried Chicken",
                price: "$12"
                },
                {
                name: "Tonkatsu",
                alternativeName: "",
                translatedName: "Fried pork cutlet",
                price: "$8"
                },
                {
                name: "Piri Kara Karaage",
                alternativeName: "",
                translatedName: "Vinegared Fried Chicken",
                price: "$14"
                },
                {
                name: "Ika Karaage",
                alternativeName: "",
                translatedName: "Fried Squid",
                price: "$14"
                },
                {
                name: "Cheese Mochi",
                alternativeName: "",
                translatedName: "",
                price: "$8 (2pcs)"
                }
        ],
        STEW: [
            {
                name: "Niku Tofu",
                alternativeName: "肉豆腐",
                translatedName: "Wagyu Beef stewed with Soft Tofu",
                price: "$15"
            },
            {
                name: "Gyu Niku to Daikon",
                alternativeName: "牛肉と大根煮",
                translatedName: "Beef chunks stewed with Radish",
                price: "$15"
            },
            {
                name: "Oden Moriawase",
                alternativeName: "オデン盛り合わせ",
                translatedName: "Japanese Winter Stew",
                price: "$12"
            }
            ],
        TEPPAN_FRIED_RICE: [
            {
                name: "Ninniku",
                alternativeName: "にんにく",
                translatedName: "Garlic",
                price: "$8"
            },
            {
                name: "Kaisen",
                alternativeName: "海鮮",
                translatedName: "Mixed Seafood",
                price: "$15"
            },
            {
                name: "Ebi",
                alternativeName: "海老",
                translatedName: "Prawn",
                price: "$12"
            },
            {
                name: "Yasai",
                alternativeName: "野菜",
                translatedName: "Vegetable",
                price: "$8"
            },
            {
                name: "Tamago",
                alternativeName: "卵",
                translatedName: "Egg",
                price: "$10"
            },
            {
                name: "Tori",
                alternativeName: "Chicken",
                translatedName: "Chicken",
                price: "$12"
            },
            {
                name: "Wagyu",
                alternativeName: "Beef",
                translatedName: "Beef",
                price: "$16"
            },
            {
                name: "Unagi",
                alternativeName: "うなぎ",
                translatedName: "Japanese Eel",
                price: "$16"
            }
            ],
        Soup: [
            {
                name: "Miso Shiru",
                alternativeName: "味噌汁",
                translatedName: "Miso Soup",
                price: "$5"
            }
            ],
        RICE_BOWL_SET:[
                {
                name: "Kaisen Don",
                alternativeName: "海鮮丼",
                translatedName: "Mixed Seafood Sashimi Rice Bowl",
                price: "$32"
                },
                {
                name: "Salmon Sashimi Don",
                alternativeName: "サーモン丼",
                translatedName: "Salmon Sashimi Rice Bowl",
                price: "$25"
                },
                {
                name: "Tekka Don",
                alternativeName: "鉄火丼",
                translatedName: "Tuna Sashimi Rice Bowl",
                price: "$25"
                },
                {
                name: "Maguro Salmon Don",
                alternativeName: "鮪とサーモン丼",
                translatedName: "Raw Tuna and Salmon Rice Bowl",
                price: "$26"
                },
                {
                name: "Tendon",
                alternativeName: "天丼",
                translatedName: "Tempura Rice Bowl",
                price: "$25"
                },
                {
                name: "Unagi Don",
                alternativeName: "鰻丼",
                translatedName: "Grilled Eel Rice Bowl",
                price: "$28"
                },
                {
                name: "Gyu Don",
                alternativeName: "牛丼",
                translatedName: "Beef Rice Bowl",
                price: "$26"
                },
                {
                name: "Beef Steak Don",
                alternativeName: "ビーフステーキ丼",
                translatedName: "Beef Steak Rice Bowl",
                price: "$28"
                },
                {
                name: "Teriyaki Chicken Don",
                alternativeName: "焼きチキン丼",
                translatedName: "Teriyaki Chicken Rice Bowl",
                price: "$18"
                },
                {
                name: "Katsu Don",
                alternativeName: "カツ丼",
                translatedName: "Pork Cutlet and Egg Rice Bowl",
                price: "$18"
                },
            ],
        OTHERS:[
                {
                    name: "Gyoza",
                    alternativeName: "餃子",
                    translatedName: "Dumplings (Pan fried / Deep Fried)",
                    price: "$12"
                },
                {
                    name: "Spam Furai",
                    alternativeName: "スパムフライ",
                    translatedName: "Spam Fries",
                    price: "$12"
                    },
                {
                    name: "Takoyaki",
                    alternativeName: "たこやき",
                    translatedName: "Grilled Octopus Balls",
                    price: "$8 (7pcs)"
                },
                {
                    name: "Yasai Croquettes",
                    alternativeName: "野菜コロッケ",
                    translatedName: "Fried Vegetable Croquettes",
                    price: "$8 (2pcs)"
                },
            ],

    }

    const [cartItems, setCartItems] = useState<number[]>([]);

    useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
    setCartItems(JSON.parse(storedCartItems));
    }
    }, []);

    const addToCart = (item: {
        name: string;
        alternativeName: string;
        translatedName: string;
        price: string;
    }) => {
        const updatedCartItems = [...cartItems, item];
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    const removeFromCart = (itemIndex: number) => {
    const updatedCartItems = cartItems.filter((_, index) => index !== itemIndex);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};
    const cartItemCount = cartItems.length;

    return(
            <>
                <div className="text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center sticky top-0 h-8">All Items {cartItemCount}</div>
                <div className="grid xl:grid-cols-3 sm:flex px-10 bg-black text-white pb-4">
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">APPETIZER</h1>
                        {items.APPETIZER.map((item, i) => (
                            <div key={i} className="border-2 border-violet-500">
                                <button onClick={() => addToCart(item)}>{item.name} +</button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">SALAD</h1>
                        {items.SALAD.map((item, i) => (
                            <div key={i} className="border-2 border-emerald-600">
                                <button onClick={() => addToCart(item)}>{item.name} + </button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">SASHIMI</h1>
                        {items.SASHIMI.map((item, i) => (
                            <div key={i} className="border-2 border-cyan-400">
                                <button onClick={() => addToCart(item)}>{item.name} + </button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">GRILLED</h1>
                        {items.GRILLED.map((item, i) => (
                            <div key={i} className="border-2 border-orange-400">
                                <button onClick={() => addToCart(item)}>{item.name} + </button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">OKONOMIYAKI</h1>
                        {items.OKONOMIYAKI.map((item, i) => (
                            <div key={i} className="border-2 border-yellow-400">
                                <button onClick={() => addToCart(item)}>{item.name} + </button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">FRIED</h1>
                        {items.FRIED.map((item, i) => (
                            <div key={i} className="border-2 border-sky-500">
                                <button onClick={() => addToCart(item)}>{item.name} + </button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">STEW</h1>
                        {items.STEW.map((item, i) => (
                            <div key={i} className="border-2 border-pink-600">
                                <button onClick={() => addToCart(item)}>{item.name} + </button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">TEPPAN FRIED RICE</h1>
                        {items.TEPPAN_FRIED_RICE.map((item, i) => (
                            <div key={i} className="border-2 border-rose-500">
                                <button onClick={() => addToCart(item)}>{item.name} + </button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">RICE BOWL SET</h1>
                        {items.RICE_BOWL_SET.map((item, i) => (
                            <div key={i} className="border-2 border-lime-500">
                                <button onClick={() => addToCart(item)}>{item.name} + </button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-bold text-4xl">OTHERS</h1>
                        {items.OTHERS.map((item, i) => (
                            <div key={i} className="border-2 border-fuchsia-700">
                                <button onClick={() => addToCart(item)}>{item.name} + </button>
                                {item.translatedName}
                                {item.alternativeName}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid place-content-center h-screen bg-slate-400 text-white border-2 border-indigo-500">
                <h1 className="text-3xl text-center">Cart</h1>
                <ul>
                    {cartItems.map((item, i) => (
                    <li key={i}>
                        {item.name} <button onClick={() => removeFromCart(i)} className="text-red-700">Remove from Cart</button>
                    </li>
                    ))}
                </ul>
                </div>
            </>
    )
}