import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/5_DesktopHero_Unrec_150x600-._CB419216629_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12345678"
            title="HUAWEI MediaPad T5 Tablet-Black (10.1 inch, 3+32GB, Wi-Fi + 4G LTE, 5 MP Rear Camera, 5100mAH Battery, 16.7M Colours, Dual Stereo Speakers, Children's Corner, Octa-Core Processor, Bluetooth)"
            price={13999}
            image="https://m.media-amazon.com/images/I/71fJozIQZ3L._AC_UY218_.jpg"
            rating={4}
          />

          <Product
            id="12345677"
            title="Apple iPhone 11 (64GB) - White (Includes EarPods, Power Adapter)"
            price={80000}
            image="https://m.media-amazon.com/images/I/51o5RmQtroL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12345679"
            title="Invicta Men's 0073 Pro Diver Collection Chronograph 18k Gold-Plated Watch with Link Bracelet"
            price={15000}
            image="https://m.media-amazon.com/images/I/71XuxT+R-EL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="12344678"
            title="LG G8X | Dual Screen (Aurora Black, Dual OLED Screens)"
            price={55000}
            image="https://m.media-amazon.com/images/I/91TNl7+Aq+L._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="12345688"
            title="Nike Men's Air Vapormax 2019/ Plttnt/Black Running Shoes"
            price={199}
            image="https://m.media-amazon.com/images/I/71-2uaxG6hL._AC_UL320_.jpg"
            rating={3}
          />
        </div>
        <div className="home_row">
          <Product
            id="456372819"
            title="Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop (8GB Ram/1TB HDD + 256GB SSD/Windows 10 Home/GTX 1650Ti Graphics/Obsidian Black/2.3 Kgs), AN515-55"
            price={49999}
            image="https://m.media-amazon.com/images/I/71+kGr+5LrL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12345699"
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price={30}
            image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="82654711"
            title="Electrobot Gaming Tower PC - Intel i5 9400F, Nvidia RTX 2060 6GB, 16GB RAM, 500GB SSD with 2 RGB Cooling Fans (Intel 9400F)"
            price={69500}
            image="https://m.media-amazon.com/images/I/41tKts8q-WL._AC_UL320_.jpg"
            rating={5}
          />
          <Product
            id="12836172"
            title="EKSA E900 Wired Stereo Gaming Headset-Over Ear Headphones with Noise Canceling Mic, Detachable Headset Compatible with PS4, Xbox One, Nintendo Switch, PC, Mac, Laptop"
            price={1999}
            image="https://m.media-amazon.com/images/I/71mmXKj-96L._AC_UY218_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
