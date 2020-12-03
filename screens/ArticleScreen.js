import React , {useState , useEffect} from "react";//reactパッケージのインストール
import { StyleSheet, SafeAreaView} from "react-native";//
import  WebView  from "react-native-webview";//ニュース記事表示のコンポーネント
import { useDispatch , useSelector } from "react-redux";
import { addClip , deleteClip } from "../store/actions/user";
import ClipButton from "../components/ClipButton";
import Loading from "../components/Loading";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ArticleScreen = ({route}) => {
  const [url , setUrl] =useState();
  const [ loading , setLoading ] = useState(false);

  useEffect(()=>{
    const article = props.navigation.getParam("article");
    setUrl(article.url);
  },[]);

  const {article} = route.params;

  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const {clips} = user;

  const isClipped = () => {
    return clips.some(clip => clip.url === article.url)
  }

  const toggleClip = () => {
    if(isClipped()){
      dispatch(deleteClip({clip:article}));
    } else {
      dispatch(addClip({clip:article}));
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
    <WebView 
      source={{ uri:url }}
      startInLoadingState={true}
      renderLoading={()=> {
          <Loading />
        }}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = state =>{
  return {
    user:state.user,
  };
}
const mapDispatchToProps = {addClip , deleteClip};