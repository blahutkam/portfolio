/** @jsx jsx */
import { jsx } from "theme-ui"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer noopener"
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 2,
      py: [2, 3],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
    }}
  >
   <h3>{title}</h3> 
    <div
      sx={{
            backgroundColor: `#fff`,
            borderRadius: `lg`,
            p: 4,
            height: `80%`,
            position: `relative`,
            opacity: 0.85
          }}>
      <div sx={{ opacity: 0.85, color: `#2d3748`, pb: 1 }}>{children}</div>
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          position:`absolute`,
          bottom: 3,
          right: 4,
          fontSize: [4, 5],
          fontWeight: `medium`,
          lineHeight: 1,
          color: `#2d3748` 

        }}
      >
        
      </div>
    </div>
  </a>
)

export default ProjectCard
