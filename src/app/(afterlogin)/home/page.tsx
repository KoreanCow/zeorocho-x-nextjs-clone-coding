import Tab from '@/app/(afterlogin)/home/_component/Tab';
import TabProvider from '@/app/(afterlogin)/home/_component/TabProvider';
import styles from './home.module.css'
import PostForm from '@/app/(afterlogin)/home/_component/PostForm';
import Post from '@/app/(afterlogin)/_component/Post';

export default function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
