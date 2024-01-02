import ProfileScreen from "./ProfileScreen";
const ProfileScreenContainer = () => {
  // // // const [fetchOne, result] = useLazyGetUserQuery();
  // // // const dispatch = useDispatch();
  // const [user, setUser] = useState('');
  // const myFunction = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('user');
  //     if(value !== null) {
  //       // value previously stored
  //       const parsedValue = JSON.parse(value);
  //       setUser(parsedValue)
  //     }
  //   } catch(e) {
  //     // error reading value
  //     console.log('Failed to fetch the data from storage')
  //   }
  // }
  // // handleFetchOne();
  // useEffect( ()=>{
  //   myFunction();
  // },[user]);
  // console.log(user);
  return <ProfileScreen ></ProfileScreen>;
};
export default ProfileScreenContainer;
