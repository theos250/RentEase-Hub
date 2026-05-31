// ===== NESTRW LOCATION DATABASE =====
// Rwanda: All 30 districts with sectors | Kenya, Uganda, Tanzania: Major cities & areas

const LOCATIONS = {
  Rwanda: {
    Kigali: {
      Gasabo: ["Kacyiru","Kimironko","Remera","Kinyinya","Rusororo","Ndera","Jabana","Jali","Bumbogo","Gisozi","Gikomero","Rutunga","Wakadogo","Nyagatovu","Kabuye"],
      Kicukiro: ["Gahanga","Gatenga","Gikondo","Kanombe","Kagarama","Kigarama","Masaka","Niboye","Nyarugunga","Busanza"],
      Nyarugenge: ["Gitega","Kanyinya","Kigali","Kimisagara","Mageragere","Muhima","Nyakabanda","Nyamirambo","Nyarugenge","Rwezamenyo","Biryogo"]
    },
    "Eastern Province": {
      Bugesera: ["Juru","Kamabuye","Mareba","Mayange","Musenyi","Mwendo","Ntarama","Nyamata","Nyarugenge","Rilima","Ruhuha","Rweru","Shyara"],
      Gatsibo: ["Gatsibo","Gitoki","Kabarore","Kageyo","Kiramuruzi","Kiziguro","Muhura","Murambi","Ngarama","Nyagihanga","Remera","Rugarama","Rwimbogo"],
      Kayonza: ["Gahini","Kabare","Kabarondo","Mukarange","Murama","Murundi","Mwiri","Ndego","Nyamirama","Nyarubaka","Ruramira","Rwinkwavu"],
      Kirehe: ["Gahara","Gatore","Kigarama","Kigina","Kirehe","Mahama","Mpanga","Musaza","Mushikiri","Nasho","Nyamugali","Nyarubuye"],
      Ngoma: ["Gashanda","Jarama","Karembo","Kazo","Kibungo","Mugesera","Murama","Mutenderi","Remera","Rukira","Rukumberi","Rurenge","Sake","Zaza"],
      Nyagatare: ["Gatsibo","Gyumba","Karama","Katabagemu","Kaungakulinda","Kibali","Kiyombe","Matimba","Mimuli","Mukama","Musheli","Nyagatare","Rwempasha","Rwimiyaga","Tabagwe"],
      Rwamagana: ["Fumbwe","Gahengeri","Gishali","Karenge","Kigabiro","Muhazi","Munyaga","Munyiginya","Musha","Muyumbu","Mwulire","Nyakariro","Nzige","Rubona"]
    },
    "Western Province": {
      Karongi: ["Bwishyura","Gishyita","Gitesi","Mubuga","Murundi","Mutuntu","Murambi","Rubengera","Rugabano","Ruganda","Rwankuba","Twumba"],
      Ngororero: ["Bwira","Gatumba","Hindiro","Kabaya","Kageyo","Kavumu","Matyazo","Muhanda","Muhororo","Ndaro","Ngororero","Nyange","Sovu"],
      Nyabihu: ["Bigogwe","Jenda","Jomba","Kabatwa","Karago","Kintobo","Mukamira","Muringa","Rambura","Rugera","Rurembo","Shingiro"],
      Nyamasheke: ["Bushekeri","Bushenge","Cyato","Gihombo","Kagano","Kanjongo","Karambi","Karengera","Kirimbi","Macuba","Mahembe","Nyabitekeri","Rangiro","Ruharambuga","Shangi"],
      Rubavu: ["Bugeshi","Busasamana","Cyanzarwe","Gisenyi","Kanama","Kanzenze","Mudende","Nyamyumba","Nyundo","Rubavu","Rugerero"],
      "Rusizi / Cyangugu": ["Bugarama","Bweyeye","Gashonga","Giheke","Gihundwe","Gikundamvura","Gitambi","Kamembe","Muganza","Mururu","Nkungu","Nyakabuye","Nyakarenzo","Nzahaha","Rwimbogo"],
      Rutsiro: ["Boneza","Gihango","Kigeyo","Kivumu","Manihira","Mukura","Murunda","Musasa","Mushonyi","Mushubati","Nyabirasi","Ruhango","Rusebeya"]
    },
    "Northern Province": {
      Burera: ["Bungwe","Butaro","Cyanika","Cyeru","Gahunga","Gatebe","Gitovu","Kagogo","Kinoni","Kinyababa","Kivuye","Nemba","Rugarama","Rugengabari","Ruhunde","Rusarabuye","Rwerere"],
      Gakenke: ["Busengo","Coko","Cyabingo","Gakenke","Gashenyi","Janja","Kamubuga","Karambo","Kivuruga","Mataba","Minazi","Muhondo","Muyongwe","Muzo","Nemba","Ruli","Rusasa","Rushashi"],
      Gicumbi: ["Bukure","Bwisige","Byumba","Cyumba","Gicumbi","Kaniga","Manyagiro","Miyove","Mukarange","Mutete","Nyamiyaga","Nyankenke","Rubaya","Rukomo","Rushaki","Rutare","Ruvune","Rwamiko","Shangasha"],
      Musanze: ["Busogo","Cyuve","Gacaca","Gashaki","Gataraga","Kimonyi","Kinigi","Muhoza","Muko","Musanze","Nkotsi","Nyange","Remera","Rwaza","Shingiro"],
      Rulindo: ["Base","Burega","Bushoki","Buyoga","Cyinzuzi","Cyungo","Kinihira","Kisaro","Masoro","Mbogo","Murambi","Ngoma","Ntarabana","Rukozo","Rusiga","Shyorongi","Tumba"]
    },
    "Southern Province": {
      Gisagara: ["Gikonko","Gishubi","Kansi","Kibirizi","Kigembe","Mamba","Muganza","Mugombwa","Mukindo","Musha","Ndora","Nyanza","Save"],
      Huye: ["Gishamvu","Huye","Karama","Kigoma","Kinazi","Maraba","Mbazi","Mukura","Ngoma","Ruhashya","Rusatira","Rwaniro","Simbi","Tumba"],
      Kamonyi: ["Gacurabwenge","Karama","Kayenzi","Kayumbu","Mugina","Musambira","Ngamba","Nyamiyaga","Nyarubaka","Rugarika","Rukoma","Runda"],
      Muhanga: ["Cyeza","Kabacuzi","Kibangu","Kiyumba","Muhanga","Mushishiro","Nyabinoni","Nyamabuye","Nyarusange","Rongi","Rugendabari","Shyogwe"],
      Nyamagabe: ["Buruhukiro","Cyanika","Gasaka","Gatare","Kaduha","Kamegeli","Kibirizi","Kibumbwe","Kitabi","Mbazi","Mugano","Musange","Nkomane","Tare","Uwinkingi"],
      Nyamasheke: ["Bushekeri","Bushenge","Cyato","Gihombo"],
      Nyanza: ["Busasamana","Busoro","Cyabakamyi","Kibirizi","Kigoma","Mukingo","Muyira","Ntyazo","Nyagisozi","Rwabicuma"],
      Nyaruguru: ["Cyahinda","Kibeho","Kivu","Mata","Mugombwa","Munini","Ngera","Ngoma","Nyabimata","Nyagisozi","Ruheru","Ruramba","Rusenge","Rusisiro","Russambo","Tumba"],
      Ruhango: ["Byimana","Kabagari","Kinazi","Kinihira","Mbuye","Mwendo","Ntongwe","Ruhango"],
    }
  },
  Kenya: {
    Nairobi: {
      "Westlands": ["Parklands","Highridge","Kangemi","Karura","Mountain View"],
      "Kilimani": ["Kilimani","Lavington","Woodley","State House"],
      "Karen": ["Karen","Langata","Hardy","Mbagathi"],
      "Eastleigh": ["Eastleigh","Huruma","Mathare","Kariobangi"],
      "Kasarani": ["Kasarani","Roysambu","Garden Estate","Thika Road"],
      "Embakasi": ["Embakasi","Donholm","Kayole","Komarock","Pipeline"],
      "CBD": ["CBD","Ngara","Starehe","Pangani","Ziwani"],
      "South B/C": ["South B","South C","Nyayo Estate","Hazina"]
    },
    Mombasa: {
      "Nyali": ["Nyali","Bamburi","Shanzu","Mkomani"],
      "Tudor": ["Tudor","Tononoka","Shimanzi"],
      "Likoni": ["Likoni","Mtongwe","Shelly Beach"],
      "Kisauni": ["Kisauni","Mwakirunge","Mikindani"]
    },
    Kisumu: {
      "Kisumu Central": ["Kondele","Nyalenda","Manyatta","Migosi"],
      "Milimani": ["Milimani","Tom Mboya","Market"],
    },
    Nakuru: {
      "Nakuru Town": ["Nakuru CBD","Milimani","Flamingo","Pipeline"],
      "Naivasha": ["Naivasha Town","Hell's Gate","Kongoni"]
    },
    Eldoret: {
      "Eldoret Town": ["Eldoret CBD","Huruma","Pioneer","Langas"],
    }
  },
  Uganda: {
    Kampala: {
      "Kampala Central": ["Nakasero","Kololo","Kamwokya","Mulago"],
      "Makindye": ["Makindye","Katwe","Kibuye","Nsambya"],
      "Rubaga": ["Rubaga","Mengo","Namirembe","Lungujja"],
      "Kawempe": ["Kawempe","Bwaise","Mulago","Kalerwe"],
      "Nakawa": ["Nakawa","Ntinda","Naguru","Bukoto","Muyenga"],
    },
    Entebbe: {
      "Entebbe Town": ["Entebbe CBD","Kitoro","Nkumba","Nakiwogo"],
    },
    Jinja: {
      "Jinja Town": ["Jinja CBD","Walukuba","Mpumudde","Kimaka"],
    },
    Mbarara: {
      "Mbarara Town": ["Mbarara CBD","Kakoba","Kamukuzi","Nyamitanga"],
    }
  },
  Tanzania: {
    "Dar es Salaam": {
      "Kinondoni": ["Msasani","Masaki","Oysterbay","Mbezi Beach","Mikocheni","Sinza","Makongo"],
      "Ilala": ["Kariakoo","Kivukoni","Gerezani","Upanga","Jangwani"],
      "Temeke": ["Temeke","Chang'ombe","Kurasini","Mbagala","Tandika"],
    },
    Arusha: {
      "Arusha Town": ["Arusha CBD","Njiro","Themi","Kimandolu","Kijenge"],
    },
    Mwanza: {
      "Mwanza Town": ["Mwanza CBD","Ilemela","Nyamagana","Pamba","Mirongo"],
    },
    Dodoma: {
      "Dodoma Town": ["Dodoma CBD","Makole","Nkuhungu","Kikuyu"],
    },
    Zanzibar: {
      "Stone Town": ["Stone Town","Ng'ambo","Michenzani","Malindi"],
      "North A": ["Nungwi","Kendwa","Matemwe"],
      "South": ["Jambiani","Paje","Makunduchi"]
    }
  }
};

// Get all countries
function getCountries() { return Object.keys(LOCATIONS); }

// Get cities for a country
function getCities(country) {
  if (!country || !LOCATIONS[country]) return [];
  return Object.keys(LOCATIONS[country]);
}

// Get districts/areas for a city
function getDistricts(country, city) {
  if (!country || !city || !LOCATIONS[country] || !LOCATIONS[country][city]) return [];
  return Object.keys(LOCATIONS[country][city]);
}

// Get sectors/neighborhoods for a district
function getAreas(country, city, district) {
  if (!country || !city || !district) return [];
  const d = LOCATIONS[country]?.[city]?.[district];
  return Array.isArray(d) ? d : [];
}

// Populate a select element with options
function populateSelect(selectId, options, placeholder) {
  const el = document.getElementById(selectId);
  if (!el) return;
  el.innerHTML = `<option value="">${placeholder || 'Select...'}</option>`;
  options.forEach(o => {
    const opt = document.createElement('option');
    opt.value = o; opt.textContent = o;
    el.appendChild(opt);
  });
}

// ===== PROPERTY DATABASE (demo data) =====
const PROPERTY_EMOJIS = ['🏢','🏠','🏘️','🏗️','🌿','✨','🏛️','🎯'];
const COLORS = ['c0','c1','c2','c3','c4','c5'];

const PROPERTIES = [
  {id:1,title:"Modern 2BR in Kacyiru",country:"Rwanda",city:"Kigali",district:"Gasabo",area:"Kacyiru",type:"apartment",price:420,currency:"USD",beds:"2",baths:"1",amenities:["WiFi","Parking","Furnished","Security"],landlord:{name:"Jean Nzeyimana",initials:"JN",verified:true,rating:4.9,color:"#E1F5EE",tc:"#085041"},rating:4.9,reviews:24,emoji:"🏢",color:"c0",available:true,description:"Beautiful modern apartment in the heart of Kacyiru, close to government offices and embassies. Walking distance to Kigali Convention Centre."},
  {id:2,title:"Spacious Villa – Gisozi Hills",country:"Rwanda",city:"Kigali",district:"Gasabo",area:"Gisozi",type:"house",price:650,currency:"USD",beds:"3",baths:"2",amenities:["Garden","Security","Parking","Generator"],landlord:{name:"Amina Uwase",initials:"AU",verified:true,rating:4.8,color:"#FAEEDA",tc:"#412402"},rating:4.8,reviews:18,emoji:"🏠",color:"c1",available:true,description:"Stunning villa on Gisozi hill with panoramic city views. Ideal for families or expats. Private garden and 2-car garage."},
  {id:3,title:"Cozy Studio – Nyamirambo",country:"Rwanda",city:"Kigali",district:"Nyarugenge",area:"Nyamirambo",type:"studio",price:280,currency:"USD",beds:"Studio",baths:"1",amenities:["WiFi","Water","Electricity"],landlord:{name:"Patrick Kagabo",initials:"PK",verified:true,rating:4.7,color:"#E6F1FB",tc:"#042C53"},rating:4.7,reviews:31,emoji:"🏗️",color:"c2",available:true,description:"Affordable and cozy studio in vibrant Nyamirambo. Perfect for young professionals. Close to local markets, restaurants, and public transport."},
  {id:4,title:"Executive Apt – Kimironko",country:"Rwanda",city:"Kigali",district:"Gasabo",area:"Kimironko",type:"apartment",price:380,currency:"USD",beds:"2",baths:"2",amenities:["Gym","Balcony","Parking","WiFi"],landlord:{name:"Clarisse Umubyeyi",initials:"CU",verified:true,rating:4.9,color:"#FBEAF0",tc:"#4B1528"},rating:4.9,reviews:15,emoji:"🏘️",color:"c3",available:true,description:"High-end apartment complex in Kimironko with gym facilities, rooftop lounge, and underground parking. 5 min from Kimironko Market."},
  {id:5,title:"Green Apartment – Remera",country:"Rwanda",city:"Kigali",district:"Gasabo",area:"Remera",type:"apartment",price:310,currency:"USD",beds:"1",baths:"1",amenities:["WiFi","Security","Furnished"],landlord:{name:"Marie Rugamba",initials:"MR",verified:false,rating:4.6,color:"#EAF3DE",tc:"#173404"},rating:4.6,reviews:9,emoji:"🌿",color:"c4",available:true,description:"Serene 1-bedroom apartment surrounded by greenery in quiet Remera. 10 minutes from Kigali International Airport."},
  {id:6,title:"Luxury 3BR – Muhima Centre",country:"Rwanda",city:"Kigali",district:"Nyarugenge",area:"Muhima",type:"apartment",price:490,currency:"USD",beds:"3",baths:"2",amenities:["Pool","Security","Parking","Furnished","Generator"],landlord:{name:"Blaise Niyonzima",initials:"BN",verified:true,rating:5.0,color:"#EEEDFE",tc:"#26215C"},rating:5.0,reviews:7,emoji:"✨",color:"c5",available:true,description:"Premium 3-bedroom apartment with swimming pool access, 24/7 security, and backup generator. Premium finishes throughout."},
  {id:7,title:"Family Home – Karen Estate",country:"Kenya",city:"Nairobi",district:"Karen",area:"Karen",type:"house",price:900,currency:"USD",beds:"4",baths:"3",amenities:["Garden","Security","Parking","WiFi","Generator"],landlord:{name:"David Kamau",initials:"DK",verified:true,rating:4.8,color:"#E1F5EE",tc:"#04342C"},rating:4.8,reviews:22,emoji:"🏠",color:"c0",available:true,description:"Elegant 4-bedroom family home in Karen's prestigious neighborhood. Large garden, staff quarters, and double garage."},
  {id:8,title:"Modern Studio – Westlands",country:"Kenya",city:"Nairobi",district:"Westlands",area:"Parklands",type:"studio",price:450,currency:"USD",beds:"Studio",baths:"1",amenities:["WiFi","Parking","Security","Gym"],landlord:{name:"Grace Wanjiru",initials:"GW",verified:true,rating:4.7,color:"#FAEEDA",tc:"#412402"},rating:4.7,reviews:19,emoji:"🏢",color:"c1",available:true,description:"Sleek studio apartment in the heart of Westlands, Nairobi's commercial hub. Walking distance to restaurants, malls, and offices."},
  {id:9,title:"2BR Apartment – Kololo",country:"Uganda",city:"Kampala",district:"Kampala Central",area:"Kololo",type:"apartment",price:550,currency:"USD",beds:"2",baths:"2",amenities:["WiFi","Security","Parking","DSTV"],landlord:{name:"Sarah Nabwire",initials:"SN",verified:true,rating:4.9,color:"#E6F1FB",tc:"#042C53"},rating:4.9,reviews:11,emoji:"🏛️",color:"c2",available:true,description:"Upscale 2-bedroom apartment in diplomatic Kololo. Close to embassies, international schools, and Kampala Golf Course."},
  {id:10,title:"Beach House – Msasani",country:"Tanzania",city:"Dar es Salaam",district:"Kinondoni",area:"Msasani",type:"house",price:750,currency:"USD",beds:"3",baths:"2",amenities:["WiFi","Security","Parking","Pool","Garden"],landlord:{name:"Omar Hassan",initials:"OH",verified:true,rating:4.8,color:"#FBEAF0",tc:"#4B1528"},rating:4.8,reviews:14,emoji:"🎯",color:"c3",available:true,description:"Beautiful 3-bedroom house in Msasani Peninsula, minutes from the beach. Perfect for expats or diplomats. Ocean breeze and full amenities."},
  {id:11,title:"Affordable Room – Kicukiro",country:"Rwanda",city:"Kigali",district:"Kicukiro",area:"Gikondo",type:"room",price:120,currency:"USD",beds:"1",baths:"1",amenities:["Water","Security"],landlord:{name:"Théogène Habyarimana",initials:"TH",verified:false,rating:4.3,color:"#EAF3DE",tc:"#173404"},rating:4.3,reviews:5,emoji:"🏘️",color:"c4",available:true,description:"Clean private room in shared compound in Kicukiro. Ideal for students or budget-conscious tenants. Good transport links."},
  {id:12,title:"3BR Villa – Nyali Beach",country:"Kenya",city:"Mombasa",district:"Nyali",area:"Nyali",type:"house",price:680,currency:"USD",beds:"3",baths:"2",amenities:["Pool","WiFi","Security","Parking","Garden"],landlord:{name:"Ali Mohammed",initials:"AM",verified:true,rating:4.7,color:"#EEEDFE",tc:"#26215C"},rating:4.7,reviews:8,emoji:"🌿",color:"c5",available:true,description:"Stunning villa near Nyali Beach in Mombasa. Enjoy ocean views, private pool, and tropical garden. Ideal for families or as a holiday home."},
];

// User storage (localStorage-backed)
const DB = {
  getUsers: () => JSON.parse(localStorage.getItem('nrw_users') || '[]'),
  saveUsers: (u) => localStorage.setItem('nrw_users', JSON.stringify(u)),
  getSession: () => JSON.parse(localStorage.getItem('nrw_session') || 'null'),
  saveSession: (s) => localStorage.setItem('nrw_session', JSON.stringify(s)),
  clearSession: () => localStorage.removeItem('nrw_session'),
  getSaved: () => JSON.parse(localStorage.getItem('nrw_saved') || '[]'),
  saveSaved: (s) => localStorage.setItem('nrw_saved', JSON.stringify(s)),
  getBookings: () => JSON.parse(localStorage.getItem('nrw_bookings') || '[]'),
  saveBookings: (b) => localStorage.setItem('nrw_bookings', JSON.stringify(b)),
  getPayments: () => JSON.parse(localStorage.getItem('nrw_payments') || '[]'),
  savePayments: (p) => localStorage.setItem('nrw_payments', JSON.stringify(p)),
  getMessages: () => JSON.parse(localStorage.getItem('nrw_messages') || 'null') || generateDefaultMessages(),
  saveMessages: (m) => localStorage.setItem('nrw_messages', JSON.stringify(m)),
  getUserProperties: () => JSON.parse(localStorage.getItem('nrw_user_props') || '[]'),
  saveUserProperties: (p) => localStorage.setItem('nrw_user_props', JSON.stringify(p)),
};

function generateDefaultMessages() {
  return [
    {id:1, with:"Jean Nzeyimana", initials:"JN", color:"#E1F5EE", tc:"#085041", propertyId:1,
     msgs:[
       {from:"them", text:"Hello! Is the Kacyiru apartment still available?", time:"10:32 AM"},
       {from:"me", text:"Yes it is! Would you like to schedule a viewing?", time:"10:45 AM"},
       {from:"them", text:"That would be great, how about this weekend?", time:"11:01 AM"},
     ]
    },
    {id:2, with:"Amina Uwase", initials:"AU", color:"#FAEEDA", tc:"#412402", propertyId:2,
     msgs:[
       {from:"them", text:"I saw your listing for the Gisozi villa. Is parking included?", time:"9:15 AM"},
       {from:"me", text:"Yes! 2-car garage and additional outside parking.", time:"9:28 AM"},
     ]
    }
  ];
}
