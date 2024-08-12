import "./globalStyles/styles.css";
import CardComponent from "./components/Card/CardComponent";
import ShipComponent from "./components/Ship/ShipComponent";
import PendingRatingsComponent from "./components/PendingRatings/PendingRatings";
// import TipComponent from "./components/Tip/Tip";
import ServiceRequestComponent from "./components/ServiceRequestExcerptCompany/ServiceRequestExcerptCompany";

const shipImage1 =
  "https://t3.ftcdn.net/jpg/00/41/06/42/360_F_41064239_IaGdGyf1vxHFaNDS5K164OFOwiMe1hC9.jpg";

const shipImage2 =
  "https://i.guim.co.uk/img/media/e8f6e2839f90aa29229d2cfa92007c4863303e4a/0_201_2740_1645/master/2740.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=432156ec1483286fb96ce0fa7a764a6d";

const doggoImageUrl =
  "https://khpet.com/cdn/shop/articles/Do_Dogs_Like_Snow_1200x600_crop_center.jpg?v=1698418919";

export default function App() {
  return (
    <>
      <ShipComponent image={shipImage1} name="Malady" type="Passenger" />
      <ShipComponent image={shipImage2} name="Mephisto" type="Pirate" />{" "}
      <PendingRatingsComponent
        image={doggoImageUrl}
        supplierName="Supplier name"
        shipName="Ship name"
        className={{ class1: "fa-solid fa-user", class2: "fa-solid fa-ship" }}
      />
      <ServiceRequestComponent
        status="Offers Received"
        hasNewMessage={true}
        totalOffers={2}
        shipName="Bellatrix"
        equipments="Combustion Engine"
        uniqueId="RND-23"
        arrival="25 Mar"
        departure="31 Mar"
        port="Keihin Ports"
      />
    </>
  );
}
