import Card from "../Card/Card";
import Header from "../Header/Header";

function HomeView() {

  const info = [
    {
      id: 1,
      title: 'Tango Technology',
      address: 'Sydney, Level 7, 171 Clarence Street',
      website: 'Website',
      phone: '+61 2 8001 0250',
      status: 'Distributor',
    },
    {
      id: 2,
      title: 'Blue Turtle Technologies',
      address: 'Midrand, Block E, Midridge Office Estate, International Business Gateway, Cnr New Road & Sixth',
      website: 'Website',
      phone: '+39 0461 997 111',
      status: 'Elite Partner',
    },
    {
      id: 3,
      title: 'Novus Insight (Connecticut Center for Advanced Technology)',
      address: 'East Hartford, 222 Pitkin Street',
      website: 'Website',
      phone: '8605198496',
      status: 'MSP Partner',
    },
    {
      id: 4,
      title: 'Soway Information&Technology (Shanghai) Co., LTD',
      address: 'Room 606, No#20 Building, Qibao International, 8633 Lane, Zhongchun Road, Minhang District Shanghai, China',
      website: 'Website',
      phone: '+86 21 6031 7626',
      status: 'Preferred Partner',
    },
  ]

  return (
    <>
      <Header />
        {info.map((company) => {
          return (
            <Card key={company.id} item={company} />
          )
        })}
    </>
  );
}

export default HomeView;
