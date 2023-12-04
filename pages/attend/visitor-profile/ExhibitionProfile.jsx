import React from 'react'
import viProfiles from '../../../data/viProfiles'
import style from '../../../styles/Blogs.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { BsCheckCircle } from 'react-icons/bs'
import { useAppDispatch } from '../../../redux/hooks'
import { toggleBlogModal } from '../../../redux/slices/blogModalToggleSlice'
import { changeActiveProfile } from '../../../redux/slices/activeProfileSlice'

export default function ExhibitionProfile() {
    const dispatch = useAppDispatch()
  return (
    <div style={{paddingTop: "100px"}} className={style.blogs}>
        <div className={style.blogs__bg}></div>
        {/* <h1>Blogs</h1> */}
        <div style={{gap: "100px", maxWidth: "1200px"}} className={style.blogs__list}>
            {viProfiles && viProfiles?.map((profile, index) => (
                <div key={index} className={style.blog__item}>
                    {profile.image && profile.image !== "" && <Image src={profile.image} alt="Exhibition Profile" width={500} height={200} quality={100} priority />}
                    <div className={style.blog__content}>
                        <h3>{profile.name}</h3>
                        {profile.list.slice(0, 3).map((item, i) => (
                            <p key={i}><BsCheckCircle /> {item}</p>
                        ))}
                    </div>
                    <div className={style.blog__read}>
                        <Link href={`#exProfile`} onClick={() => {
                            dispatch(changeActiveProfile(profile))
                            dispatch(toggleBlogModal())
                        }}>Read More</Link>
                    </div>
                </div>
            ))}
        </div>
        {/* <Link href={'/blogs'} className={style.blogs__more}>More</Link> */}
    </div>
  )
}
