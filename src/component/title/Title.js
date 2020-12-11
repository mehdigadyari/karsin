import { Grid, Icon, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './Title.styles'
import Card from './Card'
import BoxOn from './BoxOn'
import Head from '../../asset/Rectangle 514.jpg'
import Head2 from '../../asset/Rectangle 57.jpg'
import BodyOne from '../../asset/Rectangle 55.png'
import Pic1 from '../../asset/Rectangle 515.png'
import Pic2 from '../../asset/Rectangle 515 (1).png'
import Pic3 from '../../asset/Rectangle 515 (2).png'
import Q1 from '../../asset/q1.png'
import Q2 from '../../asset/q2.png'
import Qx from '../../asset/q3.png'

import Profile from '../../asset/Ellipse 737.png'
import Vector from '../../asset/Vector.png'

export default function Title() {
  const classes = useStyles()
  const [data, setData] = useState([
    {
      id: 0,
      Txt: 'اساسا مورد استفاده قرار گیرد. سوالات اهل دنیای موجود طراحی جوابگوی',
      pic: Pic1
    },
    {
      id: 1,
      Txt: 'اساسا مورد استفاده قرار گیرد. سوالات اهل دنیای موجود طراحی جوابگوی',
      pic: Pic2
    },
    {
      id: 2,
      Txt: 'اساسا مورد استفاده قرار گیرد. سوالات اهل دنیای موجود طراحی جوابگوی',
      pic: Pic3
    }
  ])
  return (
    <Grid direction="column" className={classes.root}>
      <Grid className={classes.HeadGrid}>
        <Typography color="primary" className={classes.karTitle}>
          چگونه در 5 مرحله اولین پروژه خود را در کارسین دریافت کنیم؟
        </Typography>
        <img src={Head} alt="Head" className={classes.HeadIcon} />

        <div className={classes.divProfile}>
          <Typography color="primary" className={classes.profTypo}>
            محمد حسین معتمدی
          </Typography>
          <img src={Profile} alt="Profile" className={classes.Profile} />
        </div>
        <div className={classes.divProfile2}>
          <Typography color="primary" className={classes.profTypo}>
            تاریخ انتشار: 1399/08/06
          </Typography>
          <img src={Vector} alt="Vector" className={classes.ProfileIcon} />
        </div>
      </Grid>
      <Grid className={classes.bodyDown} container>
        <Grid item className={classes.bodyDown1} xs={12} sm={7}>
          <Typography className={classes.bodyRight} color="primary">
            چگونه در 5 مرحله اولین پروژه خود را در کارسین دریافت کنیم؟
          </Typography>
          <Typography className={classes.bodyRight1} color="primary">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
          <img src={BodyOne} alt="BodyOne" className={classes.BodyOne} />
          <Typography className={classes.bodyRight} color="primary">
            مرحله اول: اعتماد به نفس
          </Typography>
          <Typography className={classes.bodyRight1} color="primary">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
          <div className={classes.bodyRightDiv}>
            <Typography className={classes.bodyRight1} color="primary">
              اهل دنیای موجود اساسا طراحی مورد استفاده قرار گیرد.
            </Typography>
            <Typography className={classes.bodyRight1} color="primary">
              اهل دنیای موجود اساسا طراحی مورد استفاده قرار گیرد.
            </Typography>
            <Typography className={classes.bodyRight1} color="primary">
              اهل دنیای موجود اساسا طراحی مورد استفاده قرار گیرد.
            </Typography>
          </div>
          <Typography className={classes.bodyRight} color="primary">
            مرحله دوم: مدیریت منابع مالی
          </Typography>
          <Typography className={classes.bodyRight1} color="primary">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
          <img src={Head2} alt="Head2" className={classes.BodyOne} />
          <Typography className={classes.bodyRight1} color="primary">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
          <Typography className={classes.bodyRight1} color="primary">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
          <Typography className={classes.bodyRight1} color="primary">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={1} />
        <Grid item className={classes.bodyDown2} xs={12} sm={4}>
          <Typography className={classes.TitleOn} color="primary">
            مطالب پیشنهادی
          </Typography>
          <div className={classes.LineVerb} />
          {data.map((item) => (
            <Card key={item.id} imgCard={item.pic} Title={item.Txt} />
          ))}
          <Typography className={classes.TitleOn} color="primary">
            بنرهای تبلیغاتی
          </Typography>
          <div className={classes.LineVerb} />
          <img src={Q1} alt="Q1" className={classes.leftPic} />
          <img src={Q2} alt="Q2" className={classes.leftPic} />
          <Typography className={classes.TitleOn} color="primary">
            تگ های پست
          </Typography>
          <div className={classes.LineVerb} />
          <div className={classes.boxOnStyle}>
            <BoxOn TitleGrid="وردپرس" />
            <BoxOn TitleGrid="PHP" />
            <BoxOn TitleGrid="CSS" />
            <BoxOn TitleGrid="سئو" />
            <BoxOn TitleGrid="فریلنسینگ" />
            <BoxOn TitleGrid="مدیریت منابع" />
          </div>
        </Grid>
      </Grid>
    </Grid>
  )
}
