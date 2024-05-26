"use server"
import { FormServer } from "@/firebase/FormServer";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook, faTwitter, faInstagram, faYoutube, faTiktok, faSnapchat, faTelegram, faGoogle } from '@fortawesome/free-brands-svg-icons';



const ArabicForm = async() => {

  //let socialMediaIcon = faFacebook;
  return (
    <form action={FormServer} style={{ direction: 'rtl' }}>
      
      <label htmlFor="username">اسم المستخدم:</label>
      <input
        type="text"
        id="username"
        name="username"
      />

      <label htmlFor="emailOrPhone">البريد الإلكتروني أو الهاتف:</label>
      <input
        type="text"
        id="emailOrPhone"
        name="emailOrPhone"
      />

      <label htmlFor="type_of_social_media">نوع وسائل التواصل الاجتماعي:</label>
      <select name="type_of_social_media">
        {[ 'TikTok', 'Snapchat', 'Telegram', 'Facebook', 'Twitter', 'Instagram', 'YouTube', 'Google', 'All', 'Other'].map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <label htmlFor="password">كلمة المرور:</label>
      <input
        type="password"
        id="password"
        name="password"
      />

      <label htmlFor="details">تفاصيل:</label>
      <textarea
        id="details"
        name="details"
      />

      <button type="submit">إرسال</button>
    </form>
  );
};

export default ArabicForm;
