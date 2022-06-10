import { React } from "react";
import L from "leaflet"
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Location() {
    const getIcon = (_iconSize) => {
        return L.icon({
            iconUrl: require("../../assets/icon-location.png"),
            iconSize: [_iconSize]
        })
    }

    return (
    <div className="location">
      <div id="map" className="h-[550px] z-0 relative">
        <MapContainer
          className="h-full"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            className="grayscale"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} icon={getIcon(50)}>
            <Popup>
              Our location <br /> please come to visit us.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <Link to={"/"}>
                <div className='group button cursor-pointer flex flex-row-reverse absolute top-0 z-50 md:left-14'>
                    <div className='group-hover:bg-camel transition-colors textPart w-52 h-20 bg-almostBlack flex items-center justify-center font-bigShoulder font-extrabold text-xl text-pureWhite tracking-btn'>BACK TO HOME</div>
                    <div className='group-hover:bg-almostBlack transition-colors clickPart w-14 h-20 bg-camel flex items-center justify-center'><svg width="10" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="#FFF" fill="none" d="M9 24 1 12 9 0"/></svg></div>
                </div>
     </Link>

     <div className="ourLocation bg-almostBlack pt-12 flex justify-center items-center">
         <div className="w-11/12 md:flex justify-between lg:w-4/5">
            <h2 className="text-pureWhite font-bigShoulder text-5xl font-black md:w-[223px] lg:text-7xl lg:w-[350px]">OUR LOCATION</h2>
            <div className="md:w-[400px] lg:w-[540px]">
                <h3 className="text-camel font-black text-2xl uppercase mt-12 md:mt-0">99 King Street</h3>
                <p className="text-pureWhite font-outfit font-light text-lg mt-5">
                    Newport <br/>
                    RI 02840 <br/>
                    United States of America
                </p>

                <p className="text-pureWhite font-outfit font-light text-lg mt-5 pb-14">
                    Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. 
                </p>
            </div>
        </div>
         </div>

         <div className={"bg-camel footer w-full flex justify-center items-center"}>
        <div className='w-4/5 pt-20 pb-20 md:flex md:items-start md:justify-between md:pt-10 md:pb-10'>
            <svg width="111" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M3.916 18.656V12.99L3.27 3.27h.598l.99 9.95 1.406 5.436h3.708l1.428-5.435.968-9.95h.621l-.668 9.72v5.665h3.455V.23H10.25L8.706 7.21l-.276 8.406H7.83l-.3-8.407L6.012.23H.462v18.426h3.455Zm18.61.23c1.689 0 2.902-.356 3.64-1.07.736-.714 1.135-1.9 1.197-3.559.061-1.505.092-3.105.092-4.802 0-1.697-.03-3.313-.092-4.848-.062-1.643-.46-2.822-1.198-3.536C25.428.357 24.215 0 22.525 0c-1.688 0-2.913.357-3.673 1.071-.76.714-1.155 1.893-1.186 3.536a237.22 237.22 0 0 0-.046 4.825v.365c.002 1.576.018 3.063.046 4.46.03 1.659.426 2.845 1.186 3.559s1.985 1.07 3.674 1.07Zm0-2.81c-.906 0-1.374-.39-1.405-1.174-.03-.783-.054-1.643-.07-2.58a176.449 176.449 0 0 1 0-5.78c.016-.937.04-1.797.07-2.58.03-.768.499-1.152 1.405-1.152.89 0 1.351.384 1.382 1.152.03.783.057 1.643.08 2.58a117.65 117.65 0 0 1 0 5.78c-.023.937-.05 1.797-.08 2.58-.03.783-.491 1.175-1.382 1.175Zm11.447 2.58c1.735 0 2.987-.368 3.754-1.105.768-.737 1.167-1.95 1.198-3.64.03-1.074.05-2.091.058-3.051.007-.96.007-1.92 0-2.88-.008-.959-.027-1.968-.058-3.028-.03-1.689-.43-2.898-1.198-3.628C36.96.595 35.708.23 33.973.23h-4.675v18.426h4.675Zm0-3.04h-1.22V3.271h1.22c.967 0 1.467.422 1.497 1.266.092 3.256.092 6.519 0 9.79-.03.86-.53 1.29-1.497 1.29Zm14.81 3.04v-3.04H44.27v-4.814h4.284v-3.04h-4.284V3.271h4.514V.23h-7.97v18.425h7.97Zm4.837 0v-6.218h.783l1.75 6.218h3.663l-2.165-6.794a3.199 3.199 0 0 0 1.405-1.463c.307-.637.476-1.455.506-2.453.016-.43.027-.806.035-1.128.008-.323.008-.645 0-.968a96.42 96.42 0 0 0-.035-1.128c-.061-1.597-.472-2.745-1.232-3.444C57.57.58 56.33.23 54.61.23h-4.445v18.426h3.455Zm.99-9.259h-.99V3.271h.99c.952 0 1.451.422 1.497 1.266a28.055 28.055 0 0 1 0 3.594c-.046.844-.545 1.266-1.497 1.266Zm9.927 9.26-.299-7.072-.599-8.337h.645l.944 9.374 1.382 6.034h5.252V.23h-3.34l.276 7.9.645 7.486h-.598l-1.267-9.512L66.196.23h-4.998v18.426h3.34ZM3.547 39.77l.392-3.847H6.61l.392 3.847h3.547L7.992 21.344H2.557L0 39.77h3.547Zm2.74-6.887H4.262l.415-4.077.276-4.422h.645l.276 4.422.415 4.077Zm9.099 6.887v-6.22h.783l1.75 6.22h3.663l-2.165-6.795a3.199 3.199 0 0 0 1.404-1.463c.308-.637.477-1.454.507-2.452.016-.43.027-.807.035-1.13.007-.322.007-.644 0-.966-.008-.323-.02-.7-.035-1.13-.061-1.596-.472-2.744-1.232-3.442-.76-.7-2-1.048-3.72-1.048h-4.445V39.77h3.455Zm.99-9.26h-.99v-6.126h.99c.952 0 1.451.422 1.497 1.267a28.055 28.055 0 0 1 0 3.593c-.046.844-.545 1.267-1.497 1.267Zm12.553 9.26V24.384h2.948v-3.04h-9.374v3.04h2.971V39.77h3.455Zm14.326.23c1.643 0 2.841-.357 3.593-1.071.753-.714 1.167-1.9 1.244-3.559.03-.706.05-1.474.058-2.303.007-.829-.004-1.597-.035-2.303h-4.63v2.994h1.267a16.197 16.197 0 0 1 0 2.257c-.03.384-.176.676-.437.876-.261.2-.614.299-1.06.299-.89 0-1.359-.392-1.405-1.175a90.954 90.954 0 0 1-.126-3.535 107.71 107.71 0 0 1 0-3.858c.023-1.29.065-2.472.126-3.547.046-.768.515-1.152 1.405-1.152.845 0 1.29.384 1.336 1.152.03.43.046.96.046 1.59 0 .629-.015 1.158-.046 1.588h3.455c.03-.353.046-.775.046-1.266 0-.492-.015-.914-.046-1.267-.107-1.643-.53-2.822-1.267-3.536-.737-.714-1.911-1.07-3.524-1.07-1.136 0-2.053.157-2.752.471a3.032 3.032 0 0 0-1.543 1.532c-.33.706-.519 1.643-.565 2.81-.015.614-.03 1.328-.046 2.142a135.078 135.078 0 0 0 0 5.102c.016.821.031 1.555.046 2.2.046 1.105.23 1.996.553 2.671a3.01 3.01 0 0 0 1.532 1.486c.699.315 1.624.472 2.775.472Zm9.375-.23.391-3.847h2.672l.391 3.847h3.547l-2.556-18.426h-5.436L49.083 39.77h3.547Zm2.74-6.887h-2.026l.414-4.077.277-4.422h.644l.277 4.422.414 4.077Zm13.636 6.887v-3.04h-4.538V21.343h-3.455V39.77h7.993Zm9.374 0v-3.04h-4.537V21.343h-3.455V39.77h7.992Zm9.351 0v-3.04h-4.514v-4.814H87.5v-3.04h-4.284v-4.492h4.514v-3.04h-7.969V39.77h7.97Zm4.837 0v-6.22h.783l1.75 6.22h3.663l-2.165-6.795a3.199 3.199 0 0 0 1.405-1.463c.307-.637.476-1.454.507-2.452.015-.43.026-.807.034-1.13.008-.322.008-.644 0-.966a96.42 96.42 0 0 0-.034-1.13c-.062-1.596-.473-2.744-1.233-3.442-.76-.7-2-1.048-3.72-1.048h-4.445V39.77h3.455Zm.99-9.26h-.99v-6.126h.99c.953 0 1.452.422 1.498 1.267a28.055 28.055 0 0 1 0 3.593c-.046.844-.545 1.267-1.497 1.267Zm13.037 9.26v-4.4l.253-1.06 3.202-12.966h-3.524l-.99 4.468-.346 5.413h-.645l-.345-5.413-.99-4.468h-3.525l3.202 12.99.253 1.036v4.4h3.455Z" fill="#151515"/></svg>
            <p className='mt-9 text-almostBlack font-outfit font-light leading-7 md:w-72 md:mt-0 lg:w-[30rem]'>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>

            <div className='social flex items-center justify-between mt-9 w-28 md:mt-0'>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path className='hover:fill-pureWhite cursor-pointer' d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z" fill="#151515"/></svg>
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path className='hover:fill-pureWhite cursor-pointer' d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" fill="#151515"/></svg>
                <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg"><path className='hover:fill-pureWhite cursor-pointer' d="M20 2.172a8.192 8.192 0 0 1-2.357.646 4.11 4.11 0 0 0 1.805-2.27 8.22 8.22 0 0 1-2.606.996A4.096 4.096 0 0 0 13.847.248c-2.65 0-4.596 2.472-3.998 5.037A11.648 11.648 0 0 1 1.392 1a4.109 4.109 0 0 0 1.27 5.478 4.086 4.086 0 0 1-1.858-.513c-.045 1.9 1.318 3.679 3.291 4.075a4.113 4.113 0 0 1-1.853.07 4.106 4.106 0 0 0 3.833 2.849A8.25 8.25 0 0 1 0 14.658a11.616 11.616 0 0 0 6.29 1.843c7.618 0 11.923-6.434 11.663-12.205A8.354 8.354 0 0 0 20 2.172Z" fill="#151515"/></svg>
            </div>
        </div>
    </div>
    </div>
  );
}
