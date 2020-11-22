import React from "react";//reactパッケージのインストール
import { StyleSheet, SafeAreaView, Text } from "react-native";//
import { WebView } from "react-native-webview";//ニュースの記事を表示するためのコンポーネント

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ArticleScreen = ({route}) => {
  const {article} = route.params;
  console.log(route);
  return (
    <SafeAreaView style={styles.container}>
    <WebView source={{uri:article.url}} />
    </SafeAreaView>
  );
};
