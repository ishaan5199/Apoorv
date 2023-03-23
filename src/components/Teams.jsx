import { mentors } from "@/data/team";
import { Parallax } from "react-scroll-parallax";
import styles from "../styles/Teams.module.css";
import TeamCard from "./Cards/TeamCard";

const Teams = (props) => {
	return (
		<div className={styles.team_container}>
			<div className={styles.team_gradient}>
				<div className={styles.team_header}>
					<h1 className={styles.team_maintext + " " + styles.team_title}>
						Our Team
					</h1>
					<div className={styles.team_line}></div>
				</div>
				<div className={styles.team_blur}>
					<div className={styles.team_subintro}>
						<p className={styles.team_subtext + " " + styles.team_introtext}>
							Our team consists of people full of brilliance, talent, and
							hard-work. If you want to see the best, it&#39;s here.
						</p>
						<p className={styles.team_subtext + " " + styles.team_introtext}>
							Check out each section for a comprehensive list of the team.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.team_members}>
				<h2 className={styles.team_maintext + " " + styles.team_subtitle}>
					The Mentors
				</h2>
				<p className={styles.team_subtext + " " + styles.team_stitletext}>
					They are the basis, the foundation of this event. A big thank you to
					our mentors.
				</p>
				<div className={styles.cardWrapper}>{mentors.map((mentor, index) => {

					return (
						<Parallax key={index} speed={index & 1 ? 5 : -5}>
							<TeamCard key={index} image={mentor.image} gif={mentor.gif} alt={mentor.name} subheading={mentor.club} title={mentor.name} socials={mentor.socials} onHoverAnimation={"scale"} />
						</Parallax>)
				})}</div>

				<h2 className={styles.team_maintext + " " + styles.team_subtitle}>
					The Developers
				</h2>
				<p className={styles.team_subtext + " " + styles.team_stitletext}>
					Everything you see here was painstakingly written by hand, in React by
					our developers.
				</p>
				<div className={styles.cardWrapper}>{mentors.map((mentor, index) => {

					return (
						<Parallax key={index} speed={index & 1 ? 5 : -5}>
							<TeamCard key={index} image={mentor.image} gif={mentor.gif} alt={mentor.name} subheading={mentor.club} title={mentor.name} socials={mentor.socials} onHoverAnimation={"scale"} />
						</Parallax>)
				})}</div>

				<h2 className={styles.team_maintext + " " + styles.team_subtitle}>
					The Event Managers
				</h2>
				<p className={styles.team_subtext + " " + styles.team_stitletext}>
					The life blood of the events are done by these great people. From the
					ideation to the implementation.
				</p>
				<div className={styles.cardWrapper}>{mentors.map((mentor, index) => {

					return (
						<Parallax key={index} speed={index & 1 ? 5 : -5}>
							<TeamCard key={index} image={mentor.image} gif={mentor.gif} alt={mentor.name} subheading={mentor.club} title={mentor.name} socials={mentor.socials} onHoverAnimation={"scale"} />
						</Parallax>)
				})}</div>

			</div>
		</div>
	);
};

export default Teams;