import React,{useState,useEffect} from 'react'
import { getProfile } from '../helper/ApiHelper';
import { getAllCartItems, removeItemFromCart } from '../helper/CartHelper';
import ImageHelper from '../helper/ImageHelper';
import { getSession } from '../helper/session';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

import './Profile.css'

let tenant = getSession()

const Profile = () => {
    const [products, setProducts] = useState([]);
    const [profile, setProfile] = useState();
    const [reload, setReload] = useState(true);
  
    const loadAllCartProducts = () => {
      setProducts(getAllCartItems());
    };
  
    const reloadPage = () => {
      setReload(!reload);
    };

    useEffect(() => {
        loadAllCartProducts();
      }, [reload]);

      useEffect(()=>{
        getProfile(JSON.parse(tenant).id).then(data=>{
          console.log(data);  
          setProfile(data)
        }).catch(err=>{
          console.log(err);
        })
      },[])

      console.log(profile);
  return (
      <>
    <div
    style={{display:"flex",width:"100%",minHeight:"100vh"}}
    >

    <div
    style={{width:"70%",display:"flex"}}
    >
       <div style={{ width: "20%", margin: '20px 60px' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src="https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, }}>
          <Text weight={500}>Name: {profile !== undefined? profile[0].fullName : "" }</Text>
          <Badge color="pink" variant="light">
            {profile !== undefined?profile[0].gender:""}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: "", lineHeight: 1.5 }}>
          Date of Birth {profile !== undefined?profile[0].dateOfBirth:""}
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
    </div>

    <div style={{ width: "40%", margin: '20px 60px' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          {/* <Image src="./image.png" height={160} alt="Norway" /> */}
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, }}>
          <Text weight={500}>Address: {profile !== undefined?profile[0].address:""}</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" style={{ color: "", lineHeight: 1.5 }}>
         Email: {profile !== undefined?profile[0].email:""}
        </Text>
        <Text size="sm" style={{ color: "", lineHeight: 1.5 }}>
         Phone: {profile !== undefined?profile[0].phoneNumber:""}
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Book classic tour now
        </Button>
      </Card>
    </div>

      </div>
    
    <div
    style={{width:"30%",margin:"20px 60px"}}
    
    >
        <h1 style={{margin:"10px 0"}} >Book marked</h1>
    {products.map((room)=>{
              console.log(room);
              return (
                <>
                  <div style={{margin:"20px 0 "}} class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <ImageHelper productId={room._id} className="rounded-t-lg" />

    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            { room.owner !== undefined? room.owner.roomAddress.district : "wait . . . " }
              </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        { room.owner !== undefined? room.owner.description : "wait . . . " }
                </p>
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rs. { room.owner !== undefined? room.owner.roomDetails.rentPerMonth : "wait . . . " } per Month
            </h6>
            <button 
            type="button"
             class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
             onClick={() => {
              removeItemFromCart(room._id);
              reloadPage();
            }}
             >
               Remove
             </button>
     
                   {/* <Link to={`/room/${room.owner._id}`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link> */}
    </div>
</div>

              
                </>
              )
            })}
    </div>
    </div>

    </>

  )
}

export default Profile