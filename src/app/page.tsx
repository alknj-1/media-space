import { Button } from "@nextui-org/button";
import {Image} from "@nextui-org/image";
import ArabicForm from './components/shard/ArabicForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      /*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
      <h1 className="title text-6xl font-bold cairo-title text-center"> MEDIA SPACE </h1>
      /*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
      
      

      <div className="mb-2 mt-0 text-center">
        <div className="w-full hover:cursor-pointer">
          <Image src="/socialmediaicons.svg" width={521} height={121} alt={""} />
        </div>
      </div>
      

      <div className="cursor-pointer mt-10 mb-10 z-10 w-full max-w-5xl text-lg items-center justify-between font-cairo lg:flex">
        <p className="title">
          <strong className="text-blue-800">مرحبا بك الى مجتمع ارتقي : </strong>
          &nbsp;
          <small>تقدم بلحظة وارتقي بوسائل التواصل الاجتماعي <em>مجاننا</em> &amp; <span> فقط شارك رابط صفحتنا مع ثلاثة اشخاص </span> واحصل على جميع الخدمات مجاننا</small>
          <small>مجتمع ارتقي المجتمع الاول في ريادة الخدمات لمستخدمي وسائل التواصل الاجتماعي مجاننا فقط اختر الخدمة وادخل تفاصيل حسابك وارتقي في لحظة  - رشق متابعين واعجاب وتعليق وجميع انواع الرشق في جميع وسائل التواصل الاجتماعي - ترويج واعلان بشكل تلقائي ومجاني واحترافي فقط قم بتسجيل الدخول واترك الباقي لنا لنرتقي بحسابك - تفعيل الربح من جميع حساباتك وارسال تفاصيل استلام الارباح اليك لتسحبها من اقرب بنك او صرافة مقابل نسبة بسيطة - طلب تفعيل او فك حظر مجاننا - طلب خدمة خاصة من صندوق التواصل ليتم مراجعتها وتنفيذها من قبل فريقنا المختص
            
            <br />
            <small className="text-blue-500">اغتنم الفرصة المجانية الان بقي 13 يوم او اقل على انتها الخدمة المجانية.</small>
          </small>
        </p>
        <br/>
      </div>
      
      <div className="cursor-pointer mb-10 grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-rigt">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            تطوير {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            تطوير وتوثيق الحساب وزيادة امان الحساب
          </p>
        </div>

        <div
          className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            ربح {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            تفعيل الربح وتحقيق الشروط
          </p>
        </div>

        <div
          className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            رشق {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            رشق متابعين اشتراكات اعجاب تعليق مشاهدات
          </p>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            مخصص {" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            طلب مخصص لخدمة او ميزة
          </p>
        </div>
      </div>
      <ArabicForm />
    </main>

  );
}
