import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { blogs } from "../constants";

const FeedbackCard = ({
  index,
  blog,
  link,
  title
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1 cursor-pointer'>
      <h1 className='text-white font-bold text-[24px]'>{title}</h1>
      <p className='text-white tracking-wider text-[14px]'><a href={`${link}`}>{blog}</a></p>
    </div>
  </motion.div>
);

const Blogs = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>How I share knowledge</p>
          <h2 className={styles.sectionHeadText}>Blogging</h2>
          <p className={styles.sectionParagraph}>You can explore all my blogs on <a href="https://dev.to/padmajothi_athimoolam_23d">Dev.to</a>, where I share insights and experiences on various topics related to development and technology.</p>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {blogs.map((blog, index) => (
          <FeedbackCard key={blog.name} index={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, "");
