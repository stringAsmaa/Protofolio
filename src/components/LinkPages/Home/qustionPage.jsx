import { Box, Typography, useTheme } from "@mui/material";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { useInViewAnimation } from "../../useInViewAnimation";

export default function AboutPage() {
  const theme = useTheme();
  const [ref, inView] = useInViewAnimation({ threshold: 0.2 });

  return (
    <>
      <Box
        ref={ref}
        sx={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0px)" : "translateY(60px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <Box
          sx={{
            py: 6,
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            textAlign: "center",
          }}
        >
          {/* TITLE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 3,
            }}
          >
            <EmojiObjectsIcon
              fontSize="large"
              sx={{ mr: 1, color: theme.palette.primary.main1 }}
            />

            <Typography
              variant="h5"
              fontWeight="bold"
              className="title-anim"
            >
              Why choose me as your Backend Engineer?
            </Typography>
          </Box>

          {/* PARAGRAPH 1 */}
          <Typography
            className="fade-text delay-1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 700,
              mx: "auto",
              mt: 2,
              lineHeight: 1.8,
            }}
          >
            I design and build robust backend systems that power real-world
            applications at scale. With over 3 years of experience in Laravel
            and production-grade architectures, I specialize in developing
            secure, high-performance platforms—from multi-tenant SaaS solutions
            to complex role-based systems.
          </Typography>

          {/* PARAGRAPH 2 */}
          <Typography
            className="fade-text delay-2"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 700,
              mx: "auto",
              mt: 2,
              lineHeight: 1.8,
            }}
          >
            I focus on writing clean, maintainable code backed by automated
            testing and CI/CD pipelines, ensuring reliability in every
            deployment. Beyond development, I bring hands-on experience in
            managing live production environments, optimizing performance, and
            resolving critical system issues efficiently.
          </Typography>

          {/* PARAGRAPH 3 */}
          <Typography
            className="fade-text delay-3"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 700,
              mx: "auto",
              mt: 2,
              lineHeight: 1.8,
            }}
          >
            If you're looking for a backend engineer who doesn't just build
            features—but builds scalable, stable systems that grow with your
            business—you're in the right place.
          </Typography>

          {/* GITHUB */}
          <Typography className="fade-text delay-4" sx={{ mt: 4 ,color: theme.palette.primary.main1}}>
            👉{" "}
            <a
            style={{color: theme.palette.primary.main1}}
              href="https://github.com/stringAsmaa"
              className="link-anim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out my GitHub
            </a>
          </Typography>
        </Box>
      </Box>

      {/* ✨ CSS */}
      <style>
        {`
          /* Title Animation */
          .title-anim {
            opacity: 0;
            transform: translateY(-20px);
            animation: fadeSlide 0.8s ease forwards;
          }

          /* Paragraph stagger animation */
          .fade-text {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.8s ease forwards;
          }

          .delay-1 { animation-delay: 0.3s; }
          .delay-2 { animation-delay: 0.6s; }
          .delay-3 { animation-delay: 0.9s; }
          .delay-4 { animation-delay: 1.2s; }

          @keyframes fadeSlide {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Link animation */
          .link-anim {
            color: #a855f7;
            text-decoration: none;
            position: relative;
            font-weight: 600;
          }

          .link-anim::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 2px;
            bottom: -3px;
            left: 0;
            background: #a855f7;
            transition: 0.3s;
          }

          .link-anim:hover::after {
            width: 100%;
          }
        `}
      </style>
    </>
  );
}