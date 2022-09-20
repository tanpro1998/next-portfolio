import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="mt-40  snap-center flex flex-col items-center rounded-lg flex-shrink-0 space-y-7 w-[500px] md:w-[600px] lg:w-[900px] bg-teal-700 p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-300 overflow-hidden ">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/273301925_664914081311894_2335935164305714610_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=COh7ehe-8KUAX_86Nq0&_nc_ht=scontent.fsgn8-4.fna&oh=00_AT-lqJJoSXUXC4Ae-HXqZUnH66aRHusTlCo9JLqEw1OLkQ&oe=632F3790"
        className="w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Flash</h4>
        <p className="text-2xl font-bold mt-1">Flash</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/1200px-HTML5_logo_resized.svg.png"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <img
            src="https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <img
            src="https://codelearn.io/Upload/Blog/react-js-co-ban-phan-1-63738082145.3856.jpg"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <p>Started work... - Ended...</p>
        <ul className="list-disc space-y-4 text-lg ml-5">
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            illum officia esse rem praesentium nisi magnam corrupti quam
            voluptate vero.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            illum officia esse rem praesentium nisi magnam corrupti quam
            voluptate vero.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            illum officia esse rem praesentium nisi magnam corrupti quam
            voluptate vero.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            illum officia esse rem praesentium nisi magnam corrupti quam
            voluptate vero.
          </li>
          <li>
            Sumary Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium illum officia esse rem praesentium nisi magnam corrupti
            quam voluptate vero.
          </li>
        </ul>
      </div>
    </article>
  );
}
