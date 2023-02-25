import Card from "./components/Card";

export default function App() {
  return (
    <>
      <div className="flex justify-center pt-3 bg-slate-200">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSett62e5hVkCGLAenTNxzf7-JYNAJcOCfi9g&usqp=CAU"
          alt=""
        />
      </div>
      <h1 className="text-4xl bg-slate-200 text-center p-4 font-bold">BUY YOUR CARS</h1>

      <div className="flex justify-between px-8 py-5 bg-slate-200">
        <Card
          name="Mclaren 720S Coupe"
          type="Petrol"
          image="https://mclaren.scene7.com/is/image/mclaren/720S-Coupe_hero:crop-16x9?wid=1980&hei=1114"
        />
        <Card
          name="Ford mustang GT"
          type="Petrol"
          image="https://www.motortrend.com/uploads/2023/01/2023-Ford-Mustang-Mach-1-6M-42.jpg"
        />
        <Card
          name="Tesla Model X"
          type="Electric"
          image="https://tesla-cdn.thron.com/delivery/public/image/tesla/37612e96-a8a7-46ea-9847-4fff683483b0/bvlatuR/std/2880x1800/Model-X-Main-Hero-Desktop-LHD?quality=auto-medium&amp;format=auto"
        />
        <Card
          name="Mercedes AMG GT"
          type="Petrol"
          image="https://www.motortrend.com/uploads/2022/02/2021-Mercedes-Benz-AMG-GT-Coupe-PVOTY22-50.jpg"
        />
      </div>
      <div className="flex justify-between px-8 py-5 bg-slate-200">
        <Card
          name="Koenigsegg Agera R"
          type="Petrol"
          image="https://www.motortrend.com/uploads/sites/5/2011/07/koengisegg-agera-R-promo.jpg?fit=around%7C875:492"
        />
        <Card
          name="KIA EV6"
          type="Electric"
          image="https://www.thedrive.com/content/2022/01/2022-Kia-EV6.jpeg?quality=85"
        />
        <Card
          name="Lamborghini Aventador"
          type="Petrol"
          image="https://www.motortrend.com/uploads/sites/11/2020/11/Lamborghini-Aventador-SVJ.jpg"
        />
        <Card
          name="Volvo XC40"
          type="Electric"
          image="https://pictures.dealer.com/v/volvocarswesthoustonvcna/1205/4bf5fd506d1dda4090a021ec932a2db8x.jpg?impolicy=downsize&w=568"
        />
      </div>
      <div className="flex justify-between px-8 py-5 bg-slate-200">
        <Card
          name="BMW I4"
          type="Electric"
          image="https://s.yimg.com/uu/api/res/1.2/O2twmX6qASgDNP.Um1Je9A--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-10/64609b80-4969-11ed-afec-2f62147a62e4.cf.jpg"
        />
        <Card
          name="Aston Martin DB9"
          type="Petrol"
          image="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/15q4/662479/2016-aston-martin-db9-gt-first-drive-review-car-and-driver-photo-662971-s-original.jpg"
        />
        <Card
          name="Rivian R1T"
          type="Electric"
          image="https://s.yimg.com/ny/api/res/1.2/lE8Uac56kT1Gy7WCFaezaA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/autos.consumerreports.org/07e1cb0f9d525bc49d26948ce7843fa8"
        />
        <Card
          name="Chevrolet Corvette"
          type="Petrol"
          image="https://media.ed.edmunds-media.com/chevrolet/corvette/2023/oem/2023_chevrolet_corvette_coupe_stingray_fq_oem_1_1600.jpg"
        />
      </div>
    </>
  );
}
