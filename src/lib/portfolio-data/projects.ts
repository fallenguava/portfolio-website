import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "traffic-control-ai",
    title: "Traffic Control using AI",
    shortDescription:
      "Academic research integrating YOLOv8, DBSCAN, and Q-Learning for adaptive traffic signal control. Achieved 42.96% improvement over fixed-time systems with only 0.30% gap to actuated control.",
    longDescription:
      "An academic research project developing an AI-powered adaptive traffic control system that addresses the fundamental limitations of conventional fixed-time signal controllers.\n\nProblem:\n✗ Fixed-time systems exhibit 35% performance degradation during off-peak and 45-60% delay increases during peak hours\n✗ 94% of traffic AI research focuses on single-algorithm solutions — no study systematically integrates computer vision, clustering, and reinforcement learning\n✗ Direct RL training on live infrastructure is impossible due to safety constraints\n✗ Existing approaches treat intersections as unified entities, ignoring lane-specific conditions\n\nSolution: A novel multi-algorithm integration framework:\n1. YOLOv8 (nano) for real-time vehicle detection at ~30 FPS\n2. Per-lane DBSCAN clustering to extract queue length, density, and wait time per lane\n3. Q-Learning agent trained in a custom simulation (Jamming Machine) to optimize signal timing\n\nKey Results:\n✓ 42.96% improvement over fixed-time control (t=1636.3, p<0.001)\n✓ Only 0.30% gap to actuated control (near-SOTA)\n✓ Strong linear model (R²=0.93) relating reward weights to performance\n✓ Balanced multi-objective reward outperforms extreme single-objective by 24%\n\nFirst systematic framework combining YOLOv8 + DBSCAN + Q-Learning for traffic control.",
    caseStudy: {
      highlights: [
        {
          label: "vs Fixed-Time",
          value: "+42.96%",
          emphasis: "high",
          icon: "TrendingUp",
        },
        {
          label: "Gap to Actuated",
          value: "0.30%",
          emphasis: "high",
          icon: "Gauge",
        },
        {
          label: "Reward Model Fit",
          value: "R²=0.93",
          emphasis: "high",
          icon: "LineChart",
        },
        {
          label: "Status",
          value: "Accepted, Published Soon",
          emphasis: "high",
          icon: "Check",
        },
      ],
      overview: [
        "Developed an AI-powered adaptive traffic signal control system as part of undergraduate research at BINUS University.",
        "First systematic framework integrating YOLOv8 computer vision, DBSCAN spatial clustering, and Q-Learning reinforcement learning for traffic control.",
        "Published result demonstrates near-state-of-the-art performance with only 0.30% gap to actuated control.",
      ],
      problem: [
        "Fixed-time traffic systems degrade by 35% during off-peak and cause 45-60% delay increases during peak hours.",
        "94% of traffic AI research uses single-algorithm approaches — no prior study systematically combined vision, clustering, and RL.",
        "Direct RL training on live infrastructure is impossible due to safety risks, creating sim-to-real performance gaps of 35-50%.",
        "Existing approaches treat intersections as single entities, missing lane-level congestion patterns critical for optimization.",
      ],
      solution: [
        "Designed a closed-loop control architecture: YOLOv8 detects vehicles → DBSCAN extracts per-lane queue patterns → Q-Learning agent optimizes signal timing.",
        "Developed a custom simulation environment (Jamming Machine) to enable safe RL training with realistic traffic dynamics.",
        "Introduced per-lane DBSCAN methodology — a novel approach with zero prior applications in real-time traffic signal control.",
        "Systematic reward function optimization revealed a predictive linear model (R²=0.93) for tuning operational priorities.",
      ],
      architecture: {
        title: "System Architecture",
        layers: [
          {
            title: "Computer Vision Layer",
            icon: "Camera",
            items: [
              "YOLOv8n (nano) — real-time detection at ~30 FPS on CPU",
              "640×480 RGB input, confidence threshold = 0.5",
              "Detects: car, truck, bus, motorcycle",
              "Assigns each detection to N/S/E/W lane ROIs",
            ],
          },
          {
            title: "Spatial Clustering Layer",
            icon: "GitGraph",
            items: [
              "Per-lane DBSCAN (ε=50px, MinPts=2)",
              "Extracts queue length, normalized density, waiting time per lane",
              "8-dimensional state vector: [ρ_N, ρ_S, ρ_E, ρ_W, W_N, W_S, W_E, W_W]",
              "First known per-lane DBSCAN application in real-time signal control",
            ],
          },
          {
            title: "Reinforcement Learning Layer",
            icon: "BrainCircuit",
            items: [
              "Tabular Q-Learning with ε-greedy exploration (decay over 10,000 episodes)",
              "6 actions: NS green (10s/15s/20s) and EW green (10s/15s/20s)",
              "Reward: weighted combination of throughput, queue, wait time, fairness",
              "Adaptive learning rate based on state visit frequency",
            ],
          },
          {
            title: "Simulation Environment",
            icon: "Monitor",
            items: [
              "Custom 'Jamming Machine' simulation for safe RL training",
              "Poisson vehicle arrivals (λ_NS=0.30, λ_EW=0.25 vehicles/step)",
              "300 timesteps per episode (25 minutes of simulated traffic)",
              "Episode terminates on deadlock (total queue > 40 vehicles)",
            ],
          },
        ],
      },
      keyImplementations: [
        {
          title: "Multi-Algorithm Integration Pipeline",
          icon: "Workflow",
          points: [
            "YOLOv8 detection coordinates feed directly into DBSCAN for spatial pattern analysis.",
            "DBSCAN output generates enriched 8D state vectors consumed by the Q-Learning agent.",
            "Closed-loop architecture enables continuous policy improvement from real traffic feedback.",
          ],
          result:
            "Near-SOTA performance (0.30% gap to actuated) using no domain-specific traffic engineering heuristics.",
        },
        {
          title: "Per-Lane DBSCAN Clustering",
          icon: "ScanLine",
          points: [
            "Applies DBSCAN independently to each of the four lanes rather than the whole intersection.",
            "Extracts queue length, density, and stationary vehicle count per lane.",
            "Handles arbitrary queue shapes and noise from false detections without pre-specifying cluster count.",
          ],
          result:
            "First per-lane DBSCAN application in real-time traffic signal control — addresses a documented research void.",
        },
        {
          title: "Reward Function Optimization",
          icon: "SlidersHorizontal",
          points: [
            "Systematically tested 5 reward configurations varying throughput weight (w_T: 0.40 → 0.70).",
            "Discovered strong negative linear relationship (R²=0.93, p<0.01) between throughput emphasis and overall performance.",
            "Baseline balanced config (w_T=0.40) outperforms extreme single-objective config (w_T=0.70) by 24%.",
          ],
          result:
            "Provides practitioners a quantitative, predictable framework for tuning reward priorities without trial-and-error.",
        },
        {
          title: "Hybrid Real-Simulation Training",
          icon: "FlaskConical",
          points: [
            "Custom Jamming Machine simulation enables RL training without risk to live infrastructure.",
            "Real YOLOv8+DBSCAN vision pipeline informs state representation quality.",
            "Trained across 10,000 episodes, converging at ~8,000 with ~400 unique states visited.",
          ],
          result:
            "Safe training framework that bridges the documented 35-50% sim-to-real performance degradation gap.",
        },
      ],
      achievements: [
        "42.96% performance improvement over fixed-time control (t=1636.3, p<0.001).",
        "Only 0.30% gap to actuated control — near state-of-the-art without loop detectors.",
        "First systematic integration of YOLOv8 + DBSCAN + Q-Learning in traffic control literature.",
        "Linear predictive model (R²=0.93) for reward function tuning across operational contexts.",
        "Balanced multi-objective reward outperforms extreme throughput-focused optimization by 24%.",
      ],
      demonstrates: [
        "AI systems research with multi-algorithm integration and rigorous experimental evaluation.",
        "Computer vision pipeline design (object detection → spatial clustering → state extraction).",
        "Reinforcement learning agent design with custom simulation environment.",
        "Statistical analysis and scientific writing (t-tests, linear regression, p-values).",
        "Identifying and addressing documented research gaps through original methodology.",
      ],
    },
    category: "Research",
    techStack: [
      "Python",
      "YOLOv8",
      "DBSCAN",
      "Q-Learning",
      "OpenCV",
      "NumPy",
      "SciPy",
    ],
    image: "/images/traffic-control-ai.png",
    githubUrl: "https://github.com/fallenguava/final-aitc-thesis-repo",
  },
  {
    id: "homelab",
    title: "Self-Hosted Home Lab",
    shortDescription:
      "Personal 24/7 production infrastructure. Self-managed CI/CD, monitoring, and multi-app hosting. Cost: $0/month vs $50+ cloud equivalent.",
    longDescription:
      "Self-Hosted Home Lab demonstrates full-stack infrastructure ownership from hardware to monitoring. Problem: wanted to learn DevOps and infrastructure without expensive cloud bills, and understand every layer of the application stack.\n\nSolution: Repurposed an old laptop into production-grade infrastructure:\n\nArchitecture Overview:\n┌─────────────────────────────────────────────────────┐\n│  Cloudflare Tunnel (Zero Trust Networking)         │\n├─────────────────────────────────────────────────────┤\n│  Git & CI/CD Layer:                                │\n│  └─ Gitea (self-hosted Git server)                │\n│  └─ Gitea Runner (automated CI/CD on git push)    │\n├─────────────────────────────────────────────────────┤\n│  Application Services:                             │\n│  └─ Aurexa (fintech), Sentinel-Go, Portfolio Site│\n├─────────────────────────────────────────────────────┤\n│  Data & Observability:                            │\n│  └─ PostgreSQL (shared database)                  │\n│  └─ Netdata (real-time monitoring dashboards)    │\n└─────────────────────────────────────────────────────┘\n\nKey Technical Implementations:\n\n1. Source Control & CI/CD:\n   • Gitea: Full Git server alternative to GitHub\n   • Gitea Runner: Executes pipeline on every push\n   • Pipeline: Build → Install dependencies → systemd service restart\n   • Result: Atomic deployments, zero-downtime rollouts\n\n2. Database:\n   • PostgreSQL shared across all services\n   • Automated daily snapshots for disaster recovery\n   • Connection pooling for performance\n\n3. Monitoring & Observability:\n   • Netdata: Real-time system dashboards (CPU, RAM, disk, network)\n   • journalctl integration: Centralized log monitoring\n   • Custom alerts for resource saturation\n\n4. Networking & Security:\n   • Cloudflare Tunnel: Zero-trust access (no open ports, no static IP needed)\n   • mTLS encryption tunnel ↔ origin\n   • No port forwarding, no DDoS exposure\n   • Custom domain: winandahartadi.cloud\n\n5. Operations:\n   • systemd for service management and auto-restart\n   • Automated backups (PostgreSQL snapshots)\n   • Version control for all configurations\n   • IaC principles for reproducibility\n\nTechnology Stack:\n• OS: Linux (WSL2 Ubuntu)\n• Infrastructure: systemd, Linux networking\n• CI/CD: Gitea + Gitea Runner\n• Database: PostgreSQL\n• Monitoring: Netdata\n• Networking: Cloudflare Tunnel\n\nKey Achievements:\n✓ Cost: $0/month (vs $50+ typical AWS/cloud equivalent)\n✓ Uptime: 99.7% over 2+ years\n✓ Performance: Sub-50ms API response times\n✓ Learning: Deep control over every infrastructure layer (OS → App → Network → Monitoring)\n✓ Reliability: Hosting multiple production applications serving real users\n✓ Scalability: Demonstrates ability to optimize limited resources\n\nWhat This Demonstrates:\n→ End-to-end DevOps ownership and Linux expertise\n→ Understanding of networking, CI/CD pipelines, and monitoring\n→ Resource efficiency and cost optimization\n→ Ability to build and maintain production infrastructure\n→ Problem-solving: turning old hardware into reliable infrastructure\n→ Self-directed learning and technical depth",
    caseStudy: {
      highlights: [
        {
          label: "Infra Cost",
          value: "$0/month",
          emphasis: "high",
          icon: "DollarSign",
        },
        {
          label: "Uptime",
          value: "99.7% (2+ years)",
          emphasis: "high",
          icon: "Activity",
        },
        {
          label: "API Latency",
          value: "Sub-50ms",
          emphasis: "high",
          icon: "Gauge",
        },
        {
          label: "Ops Model",
          value: "24/7 self-managed",
          emphasis: "medium",
          icon: "ServerCog",
        },
      ],
      overview: [
        "Built a 24/7 self-hosted production infrastructure on repurposed hardware.",
        "Primary objective: gain hands-on DevOps depth without recurring cloud costs.",
        "Owned the full lifecycle from hardware and networking to CI/CD and observability.",
      ],
      problem: [
        "Cloud infrastructure costs were too high for continuous experimentation.",
        "Needed practical, end-to-end infrastructure ownership beyond tutorials.",
        "Required secure public access without exposing home network ports.",
      ],
      solution: [
        "Repurposed an old laptop into a production-grade hosting environment.",
        "Implemented self-hosted Git, automated CI/CD, monitoring, and backup workflows.",
        "Used Cloudflare Tunnel as zero-trust networking to avoid port forwarding.",
        "Hosted multiple production applications including Aurexa, Sentinel-Go, and portfolio site.",
      ],
      architecture: {
        title: "Layered Architecture",
        layers: [
          {
            title: "Access Layer",
            icon: "ShieldCheck",
            items: [
              "Cloudflare Tunnel",
              "Zero-trust networking",
              "No open ports / no static IP",
              "mTLS tunnel protection",
            ],
          },
          {
            title: "Source & Delivery Layer",
            icon: "GitBranch",
            items: [
              "Gitea (self-hosted Git server)",
              "Gitea Runner (CI/CD execution)",
              "Push-based pipeline: Build -> Install deps -> systemd restart",
              "Atomic, zero-downtime rollouts",
            ],
          },
          {
            title: "Application Layer",
            icon: "Boxes",
            items: ["Aurexa", "Sentinel-Go", "Portfolio site"],
          },
          {
            title: "Data & Observability Layer",
            icon: "Database",
            items: [
              "PostgreSQL shared datastore",
              "Daily snapshot backups",
              "Netdata real-time dashboards",
              "journalctl centralized logs",
              "Custom resource saturation alerts",
            ],
          },
          {
            title: "Operations Layer",
            icon: "Wrench",
            items: [
              "systemd service auto-restart",
              "Version-controlled configurations",
              "IaC-oriented reproducibility",
            ],
          },
        ],
      },
      keyImplementations: [
        {
          title: "Source Control & CI/CD",
          icon: "Workflow",
          points: [
            "Self-hosted Git via Gitea for full ownership.",
            "Gitea Runner triggers on every push.",
            "Automated deployment chain with service restart.",
          ],
          result: "Reliable releases with zero-downtime deployment behavior.",
        },
        {
          title: "Database Reliability",
          icon: "Database",
          points: [
            "PostgreSQL shared across all services.",
            "Daily snapshots for disaster recovery.",
            "Connection pooling for stable throughput.",
          ],
          result: "Consistent data safety and service performance.",
        },
        {
          title: "Monitoring & Incident Readiness",
          icon: "Radar",
          points: [
            "Netdata dashboards for CPU, RAM, disk, and network.",
            "journalctl integration for faster troubleshooting.",
            "Custom alerts for resource saturation events.",
          ],
          result: "Faster detection and response to operational incidents.",
        },
        {
          title: "Zero-Trust Networking",
          icon: "Lock",
          points: [
            "Cloudflare Tunnel for secure public access.",
            "No inbound port exposure.",
            "Encrypted edge-to-origin traffic.",
          ],
          result: "Public availability with a reduced attack surface.",
        },
      ],
      achievements: [
        "Cost: $0/month vs $50+ typical cloud equivalent.",
        "Uptime: 99.7% sustained over 2+ years.",
        "Performance: sub-50ms API response profile.",
        "Reliability: hosts multiple production apps used by real users.",
        "Scalability: optimized performance on limited hardware resources.",
      ],
      demonstrates: [
        "End-to-end DevOps ownership.",
        "Linux systems and service management expertise.",
        "Practical networking security with zero-trust principles.",
        "Operational maturity in CI/CD and observability.",
        "Strong cost optimization mindset without reliability tradeoffs.",
      ],
    },
    category: "Infrastructure",
    techStack: [
      "Gitea",
      "Gitea Runner",
      "PostgreSQL",
      "Cloudflare Tunnel",
      "Netdata",
      "systemd",
      "Linux (WSL2 Ubuntu)",
    ],
    image: "/images/homelab.png",
  },
  {
    id: "aurexa",
    title: "Aurexa",
    shortDescription:
      "Full-stack personal finance platform with event sourcing architecture for audit-trail transactions. Available on web (Vue.js) and mobile (Flutter).",
    longDescription:
      "Aurexa solves the problem of fragmented personal finance tracking across multiple payments.\n\nSolution: Designed and built a dual-platform personal finance app with event sourcing architecture:\n• Backend: Fastify/TypeScript API with event-driven balance calculations (guaranteed accuracy)\n• Frontend: Vue.js responsive web app + Flutter cross-platform mobile\n• Database: PostgreSQL (Supabase) with automated backups\n• Performance: BullMQ background workers for async reconciliation and notifications\n• Infrastructure: Self-managed Hetzner server with automated deployment\n\nTechnical Highlights:\n✓ Event sourcing handles thousands of transactions without calculation drift\n✓ Sub-100ms API response times through optimization and caching\n✓ Monthly balance snapshots for performance scaling\n✓ Full audit trail for every transaction (compliance-ready)\n\nImpact: Market-ready for Indonesia's growing fintech ecosystem with payment methods most Indonesians actually use.",
    caseStudy: {
      highlights: [
        {
          label: "Platforms",
          value: "Web + Mobile",
          emphasis: "high",
          icon: "MonitorSmartphone",
        },
        {
          label: "API Latency",
          value: "Sub-100ms",
          emphasis: "high",
          icon: "Gauge",
        },
        {
          label: "Focus",
          value: "Financial Accuracy",
          emphasis: "high",
          icon: "ShieldCheck",
        },
        {
          label: "Architecture",
          value: "Event Sourcing",
          emphasis: "medium",
          icon: "GitGraph",
        },
      ],
      overview: [
        "Built a dual-platform personal finance app targeting Indonesia's fragmented digital payment ecosystem.",
        "Designed around event sourcing to guarantee balance accuracy and full audit trail.",
      ],
      problem: [
        "Personal finance tracking across multiple Indonesian payment methods is fragmented and error-prone.",
        "Traditional balance recalculation at scale leads to drift and performance bottlenecks.",
        "No existing solution that fits the Indonesian payment landscape with a proper audit trail.",
      ],
      solution: [
        "Designed event sourcing architecture where every transaction is an immutable event — balance is always derived, never mutated.",
        "Monthly balance snapshots act as checkpoints to keep read performance fast as transaction history grows.",
      ],
      architecture: {
        title: "System Architecture",
        layers: [
          {
            title: "Client Layer",
            icon: "MonitorSmartphone",
            items: [
              "Vue.js web app (responsive)",
              "Flutter mobile app (iOS & Android)",
              "Shared API contract via TypeScript types",
            ],
          },
          {
            title: "API Layer",
            icon: "Server",
            items: [
              "Fastify / TypeScript REST API",
              "Event sourcing engine for balance calculation",
              "Monthly snapshot scheduler",
            ],
          },
          {
            title: "Background Workers",
            icon: "Cpu",
            items: [
              "BullMQ job queues",
              "Async transaction reconciliation",
              "Push notification dispatch",
              "Scheduled snapshot generation",
            ],
          },
          {
            title: "Data Layer",
            icon: "Database",
            items: [
              "PostgreSQL via Supabase",
              "Immutable transaction event log",
              "Balance snapshot table",
              "Automated backups",
            ],
          },
        ],
      },
      keyImplementations: [
        {
          title: "Event Sourcing Architecture",
          icon: "GitGraph",
          points: [
            "Every transaction is stored as an immutable event, never mutated.",
            "Balance is always derived from the event log — no calculation drift.",
            "Monthly snapshots act as checkpoints to keep reads fast at scale.",
          ],
          result:
            "Guaranteed balance accuracy with a full, compliance-ready audit trail.",
        },

        {
          title: "Background Job Processing",
          icon: "Cpu",
          points: [
            "BullMQ handles async reconciliation without blocking the API.",
            "Scheduled workers generate monthly balance snapshots automatically.",
            "Push notifications dispatched via job queue for reliability.",
          ],
          result:
            "Responsive API with heavy work offloaded to background workers.",
        },
        {
          title: "Dual-Platform Frontend",
          icon: "MonitorSmartphone",
          points: [
            "Vue.js web app for desktop and mobile browser access.",
            "Flutter mobile app for native iOS and Android experience.",
            "Shared backend API contract ensures consistent data across platforms.",
          ],
          result:
            "Single backend serving two fully-featured client applications.",
        },
      ],
      achievements: [
        "Dual-platform: fully functional on both web (Vue.js) and mobile (Flutter).",
        "Sub-100ms API response times with event sourcing and snapshot optimization.",
        "Full audit trail for every transaction — compliance-ready by design.",
        "Self-hosted on Homelab with automated CI/CD — $0 extra infrastructure cost.",
      ],
      demonstrates: [
        "Full-stack product ownership from architecture to deployment.",
        "Financial systems design with event sourcing and data integrity.",
        "Cross-platform development with a shared API backend.",
        "Performance-oriented design with background workers and caching.",
      ],
    },
    category: "Web Dev",
    techStack: [
      "Vue.js",
      "Flutter",
      "Fastify",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
    ],
    image: "/images/aurexa.png",
    liveUrl: "https://aurexa.winandahartadi.cloud",
  },
  {
    id: "sentinel-go",
    title: "Sentinel-Go",
    shortDescription:
      "Self-hosted security and infrastructure monitoring agent in Go. Unified CCTV surveillance + server ops via Telegram. Zero port exposure via Cloudflare Tunnel.",
    longDescription:
      "Sentinel-Go solves the problem of expensive, closed-source commercial monitoring solutions that require port forwarding and recurring subscription fees. Needed a unified way to monitor home security (CCTV) and server operations (metrics, service control) remotely and securely.\n\nSolution: Built a single Go application that consolidates two critical functions:\n\n1. CCTV Surveillance:\n   • Connects directly to Hikvision DVR via ISAPI (Digest Authentication)\n   • Captures snapshots from 7 cameras simultaneously\n   • Composites into single image collage\n   • Sends to Telegram on configurable schedule\n   • Zero public exposure: Cloudflare Tunnel tunnels all traffic\n\n2. Server Agent (Infrastructure Monitoring):\n   • Real-time system metrics: CPU, RAM, disk via /proc\n   • Service management: start/stop/restart any systemd service via Telegram\n   • Log retrieval: tail journalctl logs from any service\n   • All operations via secure Telegram bot interface\n\nSecurity Architecture:\n✓ Role-based access control (admin/user roles)\n✓ 6-digit PIN authentication with bcrypt hashing\n✓ 3-day session tokens with automatic expiration\n✓ Brute-force lockout after 3 failed PIN attempts\n✓ Complete audit trail in PostgreSQL\n✓ Telegram bot API for secure, authenticated communication\n✓ Cloudflare Tunnel for zero-trust networking (no open ports)\n\nTechnical Implementation:\n• Language: Go (memory-efficient, single binary deployment)\n• Storage: PostgreSQL for audit logs and session management\n• Networking: Cloudflare Tunnel (mTLS protected)\n• Deployment: WSL2 Ubuntu running 24/7\n\nImpact:\n✓ Replaces 3 commercial tools (savings: $40+/month)\n✓ Sub-second response times for critical alerts\n✓ Secure remote access without compromising home network\n✓ 6+ months uptime on production server\n✓ Open source for community learning and contribution",
    caseStudy: {
      highlights: [
        {
          label: "Tools Replaced",
          value: "3 commercial apps",
          emphasis: "high",
          icon: "PackageCheck",
        },
        {
          label: "Monthly Savings",
          value: "$40+/month",
          emphasis: "high",
          icon: "DollarSign",
        },
        {
          label: "Alert Latency",
          value: "Sub-second",
          emphasis: "high",
          icon: "Gauge",
        },
        {
          label: "Uptime",
          value: "6+ months",
          emphasis: "medium",
          icon: "Activity",
        },
      ],
      overview: [
        "Built a unified home security and server monitoring agent in Go, operated entirely via Telegram bot.",
        "Consolidates CCTV surveillance and server operations into a single, self-hosted binary.",
        "Zero port exposure achieved via Cloudflare Tunnel — no home network risk.",
      ],
      problem: [
        "Commercial CCTV monitoring and server management tools are expensive and closed-source.",
        "Most solutions require port forwarding, which exposes the home network to attack.",
        "No single tool unified CCTV monitoring and server control in one interface.",
        "Needed secure remote access to server services without a VPN or exposed ports.",
      ],
      solution: [
        "Built a single Go binary that handles both CCTV snapshot delivery and server agent operations.",
        "Used Hikvision ISAPI to pull snapshots directly from the DVR without a cloud middleman.",
        "Telegram bot as the sole interface — no web UI to expose, no extra attack surface.",
        "Role-based access with PIN auth and session management for multi-user safety.",
        "Cloudflare Tunnel as zero-trust networking layer — no open ports, mTLS protection end-to-end.",
      ],
      architecture: {
        title: "System Architecture",
        layers: [
          {
            title: "Interface Layer",
            icon: "MessageCircle",
            items: [
              "Telegram Bot API (sole user interface)",
              "Role-based command routing (admin / user)",
              "PIN authentication with session tokens",
              "Brute-force lockout mechanism",
            ],
          },
          {
            title: "CCTV Module",
            icon: "Camera",
            items: [
              "Hikvision ISAPI with Digest Authentication",
              "Concurrent snapshot capture (up to 7 cameras)",
              "Image collage compositor",
              "Configurable delivery schedule",
              "Per-camera enable/disable control",
            ],
          },
          {
            title: "Server Agent Module",
            icon: "ServerCog",
            items: [
              "Real-time CPU, RAM, disk metrics via /proc",
              "systemd service management (start/stop/restart)",
              "journalctl log retrieval per service",
              "Custom alert thresholds",
            ],
          },
          {
            title: "Security & Data Layer",
            icon: "ShieldCheck",
            items: [
              "PostgreSQL for sessions, audit log, user roles",
              "bcrypt PIN hashing",
              "3-day session expiration",
              "Cloudflare Tunnel (zero-trust, mTLS)",
            ],
          },
        ],
      },
      keyImplementations: [
        {
          title: "CCTV Surveillance Engine",
          icon: "Camera",
          points: [
            "Direct DVR integration via Hikvision ISAPI with Digest Auth — no cloud middleman.",
            "Concurrent snapshot capture from up to 7 cameras using Go goroutines.",
            "Images composited into a single collage and delivered to Telegram on schedule.",
          ],
          result: "Real-time CCTV monitoring with zero subscription cost.",
        },
        {
          title: "Server Agent via Telegram",
          icon: "ServerCog",
          points: [
            "Reads real-time CPU, RAM, and disk metrics directly from /proc.",
            "Controls any systemd service (start/stop/restart) via Telegram command.",
            "Retrieves journalctl logs per service for on-demand troubleshooting.",
          ],
          result: "Full server control from anywhere, without SSH or VPN.",
        },
        {
          title: "Security Architecture",
          icon: "ShieldCheck",
          points: [
            "Role-based access (admin/user) with 6-digit PIN and bcrypt hashing.",
            "3-day session tokens with automatic expiry and lockout after 3 failed attempts.",
            "Complete audit trail stored in PostgreSQL for every action taken.",
          ],
          result: "Multi-user safe with zero credential exposure.",
        },
        {
          title: "Zero-Trust Networking",
          icon: "Lock",
          points: [
            "Cloudflare Tunnel routes all traffic with mTLS — no open ports on the home network.",
            "Single binary deployment on WSL2 Ubuntu via systemd.",
            "No VPN required for remote access.",
          ],
          result: "Secure public reachability with minimal attack surface.",
        },
      ],
      achievements: [
        "Replaced 3 commercial monitoring tools, saving $40+/month.",
        "Sub-second alert response time for critical server and CCTV events.",
        "6+ months of uninterrupted production uptime.",
        "Zero port exposure — home network fully protected.",
        "Open source: available for community learning and contribution.",
      ],
      demonstrates: [
        "Systems programming in Go with concurrent goroutine design.",
        "Hardware integration via vendor API (Hikvision ISAPI).",
        "Security-first design: auth, sessions, RBAC, audit trail.",
        "Zero-trust networking with Cloudflare Tunnel.",
        "Self-directed problem solving and end-to-end product ownership.",
      ],
    },
    category: "Infrastructure",
    techStack: [
      "Go",
      "PostgreSQL",
      "Telegram Bot API",
      "Hikvision ISAPI",
      "systemd",
      "Cloudflare Tunnel",
      "WSL2 Ubuntu",
    ],
    image: "/images/sentinel-go.png",
    githubUrl: "https://github.com/fallenguava/sentinel-go",
  },
  {
    id: "temas-training-hub",
    title: "Temas Training Hub (TTHub)",
    shortDescription:
      "Maritime crew training and certification platform. Streamlined registration, prerequisite tracking, and auto-notifications. Built for 500+ personnel.",
    longDescription:
      "Temas Training Hub solved a critical business problem: manual training registration and certification for maritime vessel crew, with no way to track prerequisites or ensure compliance.\n\nChallenge:\n✗ Manual training signup process (Excel-based)\n✗ No prerequisite validation → unqualified crew attending courses\n✗ Lost notifications → missed registrations\n✗ No audit trail for compliance\n✗ Slow, error-prone admin workflows\n\nSolution:\n• Built comprehensive admin group registration system\n• Automated prerequisite document validation before enrollment\n• Real-time notification system for pending payments and deadlines\n• High-fidelity schedule visualization (interactive monthly calendars + card-based layouts)\n• Self-service portal for crew members to see requirements and status\n\nTechnical Implementation:\n• Backend: Go (Fiber) REST APIs with complex business logic\n• Frontend: Vue.js (Quasar) with sophisticated state management\n• Database: PostgreSQL for relational certification data\n• Features: Document upload validation, workflow state tracking, batch notifications\n\nImpact:\n✓ Now manages 500+ maritime personnel certification lifecycle\n✓ 100% prerequisite compliance (was 0% in manual system)\n✓ 80% reduction in admin workload through automation\n✓ Used daily by maritime training coordinators and vessel crews\n✓ Zero certification-related compliance incidents post-launch",
    caseStudy: {
      highlights: [
        {
          label: "Personnel Managed",
          value: "500+",
          emphasis: "high",
          icon: "Users",
        },
        {
          label: "Admin Workload",
          value: "↓ 80%",
          emphasis: "high",
          icon: "TrendingDown",
        },
        {
          label: "Prerequisite Compliance",
          value: "0% → 100%",
          emphasis: "high",
          icon: "ShieldCheck",
        },
        {
          label: "Compliance Incidents",
          value: "Zero post-launch",
          emphasis: "medium",
          icon: "BadgeCheck",
        },
      ],
      overview: [
        "Built a web-based training and certification platform for maritime vessel crew at PT Temas Tbk.",
        "Replaced a fully manual, Excel-based registration process with an automated end-to-end system.",
        "Now manages the full certification lifecycle for 500+ maritime personnel.",
      ],
      problem: [
        "Training registration was entirely manual — spreadsheets, no validation, no tracking.",
        "No prerequisite enforcement meant unqualified crew could attend courses, creating compliance risk.",
        "Missed payment notifications caused missed registrations and delayed certifications.",
        "No audit trail made regulatory compliance checks slow and unreliable.",
      ],
      solution: [
        "Built an admin group registration module to handle batch crew enrollment with validation.",
        "Automated prerequisite document checking before any enrollment is confirmed.",
        "Real-time notification system triggers on pending payments, approaching deadlines, and status changes.",
        "High-fidelity schedule visualization with interactive monthly calendar and card-format layout.",
        "Self-service portal so crew can independently track their own requirements and status.",
      ],
      architecture: {
        title: "System Architecture",
        layers: [
          {
            title: "Admin Layer",
            icon: "ShieldCheck",
            items: [
              "Group registration module (batch enrollment)",
              "Prerequisite document validation",
              "Schedule management (monthly calendar + card view)",
              "Pending payment tracking & batch notifications",
            ],
          },
          {
            title: "Crew Self-Service Layer",
            icon: "User",
            items: [
              "Personal training status dashboard",
              "Requirement checklist per certification",
              "Document upload portal",
              "Registration history",
            ],
          },
          {
            title: "Notification Layer",
            icon: "Bell",
            items: [
              "Automated payment reminders",
              "Deadline approach alerts",
              "Status change notifications",
              "Persistent state filtering across sessions",
            ],
          },
          {
            title: "Data Layer",
            icon: "Database",
            items: [
              "PostgreSQL relational schema for certification data",
              "Workflow state tracking per registration",
              "Audit log for compliance reporting",
              "Document storage with validation metadata",
            ],
          },
        ],
      },
      keyImplementations: [
        {
          title: "Prerequisite Validation Engine",
          icon: "ClipboardCheck",
          points: [
            "Validates required documents and prior certifications before enrollment is allowed.",
            "Supports configurable prerequisite rules per training course type.",
            "Persistent state filtering so admins can track incomplete prerequisites across sessions.",
          ],
          result: "Prerequisite compliance went from 0% to 100% post-launch.",
        },
        {
          title: "Group Registration Module",
          icon: "Users",
          points: [
            "Batch enrollment for admin-managed crew groups.",
            "Handles validation for each individual in the batch before confirming registration.",
            "Reduces per-registration admin time through a unified workflow.",
          ],
          result: "80% reduction in admin workload for training coordination.",
        },
        {
          title: "Schedule Visualization",
          icon: "CalendarDays",
          points: [
            "Interactive monthly calendar view for schedule overview.",
            "Card-format layout for per-training detail and quick actions.",
            "Real-time availability and slot management.",
          ],
          result:
            "Coordinators can manage complex schedules with zero spreadsheet dependency.",
        },
        {
          title: "Notification System",
          icon: "Bell",
          points: [
            "Automated alerts for pending payments, approaching deadlines, and status changes.",
            "Targeted to relevant crew and admin roles.",
            "Prevents missed registrations that previously caused delayed certifications.",
          ],
          result:
            "Zero missed registrations due to notification gaps post-launch.",
        },
      ],
      achievements: [
        "Managing certification lifecycle for 500+ maritime personnel.",
        "Prerequisite compliance: 0% (manual) → 100% (automated).",
        "Admin workload reduced by 80% through automation.",
        "Zero certification-related compliance incidents since launch.",
        "Used daily by maritime training coordinators and vessel crews.",
      ],
      demonstrates: [
        "Complex business logic implementation (prerequisite rules, batch workflows).",
        "State management for multi-step registration flows.",
        "Compliance-oriented system design with audit trail.",
        "User experience design for both admin-heavy and self-service use cases.",
        "End-to-end delivery in an enterprise Agile environment.",
      ],
    },
    category: "Web Dev",
    techStack: [
      "Go (Fiber)",
      "Vue.js (Quasar)",
      "PostgreSQL",
      "REST API",
      "State Management",
    ],
    image: "/images/tthub.png",
  },
  {
    id: "times-service-desk",
    title: "TIMES Service Desk",
    shortDescription:
      "Enterprise IT ticketing platform with approval workflows (LOA) and audit trails. Handles 100+ tickets/day across 3 IT divisions.",
    longDescription:
      'TIMES Service Desk addressed a critical enterprise problem: 3 IT divisions (Support, Infrastructure, Product) had no standardized ticketing system. Result: manual workflows, compliance gaps, slow response times, and zero audit trail for sensitive changes.\n\nChallenge:\n✗ No standardized issue tracking across divisions\n✗ Manual approval workflows → bottlenecks and compliance risk\n✗ No audit trail for regulatory compliance\n✗ Lost context → repeated issues and slow resolution\n✗ Staff confusion over ticket routing and ownership\n\nSolution: Built enterprise ticketing platform with dynamic workflows:\n\n1. Workflow Engine:\n   • Ticket lifecycle: new → take → in-progress → postpone → re-open → resolve\n   • LOA (Letter of Approval) chain for sensitive changes\n   • Role-based status transitions (admin/operator/viewer roles)\n   • Auto-routing based on category and skill tags\n\n2. Audit & Compliance:\n   • Complete history of who-did-what-when for every ticket\n   • All approvals logged with timestamp and actor\n   • 90-day retention for incident investigation\n   • Supports post-mortems and compliance audits\n\n3. Portal Features:\n   • Self-service ticketing ("My Requests" dashboard)\n   • Staff can track their own tickets end-to-end\n   • Real-time notifications (assignment, approval, resolution)\n   • Company-specific categories (auto-assigns to correct team)\n\nTechnical Architecture:\n• Backend: Go (Fiber) with clean architecture patterns\n• Frontend: Vue.js (Quasar) responsive & accessible UI\n• Database: PostgreSQL (complex relational models for approval workflows, audit trail)\n• Integration: Jenkins-based deployment pipeline\n\nPost-Launch Impact:\n✓ 100+ tickets/day processed (was 0)\n✓ 99% LOA compliance for approval workflows (was 0%)\n✓ Average resolution time: 2 hours (was 24+ hours before)\n✓ Used daily by 50+ staff across IT Support, Infrastructure, Product teams\n✓ Zero compliance violations for unapproved changes (major security win)',
    caseStudy: {
      highlights: [
        {
          label: "Tickets/Day",
          value: "100+",
          emphasis: "high",
          icon: "Ticket",
        },
        {
          label: "Resolution Time",
          value: "24h → 2h",
          emphasis: "high",
          icon: "Timer",
        },
        {
          label: "LOA Compliance",
          value: "0% → 99%",
          emphasis: "high",
          icon: "BadgeCheck",
        },
        {
          label: "Active Users",
          value: "50+ staff",
          emphasis: "medium",
          icon: "Users",
        },
      ],
      overview: [
        "Built an enterprise IT ticketing system used across 3 divisions: IT Support, IT Infrastructure, and IT Product at PT Temas Tbk.",
        "Replaced fully manual issue handling with a structured workflow engine including LOA approval chains.",
        "Delivered end-to-end solo — from requirements grooming to production deployment.",
      ],
      problem: [
        "Three IT divisions had no shared ticketing system — requests were tracked via chat, email, and spreadsheets.",
        "No approval chain for sensitive changes meant compliance and security risks.",
        "Zero audit trail made incident investigations and post-mortems impossible.",
        "Staff had no visibility into their own ticket status, causing repeated follow-ups and lost context.",
      ],
      solution: [
        "Designed a dynamic workflow engine with full ticket lifecycle: new → take → in-progress → postpone → re-open → resolve.",
        "Built LOA (Letter of Approval) approval chain for sensitive changes with role-based authorization.",
        "Created a self-service 'My Requests' portal for staff to submit and track their own tickets.",
        "Auto-routing by category ensures tickets land on the correct team without manual triage.",
        "90-day audit log retention supports post-mortems, compliance audits, and incident investigations.",
      ],
      architecture: {
        title: "System Architecture",
        layers: [
          {
            title: "Workflow Engine",
            icon: "GitPullRequest",
            items: [
              "Ticket lifecycle state machine",
              "LOA approval chain for sensitive changes",
              "Role-based status transitions (admin / operator / viewer)",
              "Auto-routing by category and skill tags",
            ],
          },
          {
            title: "Self-Service Portal",
            icon: "LayoutDashboard",
            items: [
              "'My Requests' dashboard",
              "Ticket submission with company-specific categories",
              "Real-time status tracking",
              "Notification on assignment, approval, and resolution",
            ],
          },
          {
            title: "Audit & Compliance Layer",
            icon: "ClipboardList",
            items: [
              "Full history: who-did-what-when per ticket",
              "All approvals logged with timestamp and actor",
              "90-day retention for incident investigation",
              "Compliance-ready export for audits",
            ],
          },
          {
            title: "Data & Deployment Layer",
            icon: "Database",
            items: [
              "PostgreSQL with complex relational approval models",
              "Go (Fiber) clean architecture backend",
              "Vue.js (Quasar) responsive frontend",
              "Jenkins CI/CD pipeline",
            ],
          },
        ],
      },
      keyImplementations: [
        {
          title: "Dynamic Workflow Engine",
          icon: "GitPullRequest",
          points: [
            "State machine manages full ticket lifecycle with valid transition rules.",
            "LOA chain enforces multi-step approval for sensitive IT changes.",
            "Role-based transition permissions prevent unauthorized status changes.",
          ],
          result: "LOA compliance jumped from 0% to 99% post-launch.",
        },
        {
          title: "Audit Trail & Compliance",
          icon: "ClipboardList",
          points: [
            "Every action logged with actor, timestamp, and previous state.",
            "90-day retention policy for full incident investigation coverage.",
            "Supports post-mortems, regulatory audits, and SLA reporting.",
          ],
          result: "Zero unapproved changes post-launch — a major security win.",
        },
        {
          title: "Self-Service Staff Portal",
          icon: "LayoutDashboard",
          points: [
            "'My Requests' dashboard gives every staff member full ticket visibility.",
            "Company-specific category taxonomy auto-routes to the correct team.",
            "Real-time notifications on every status transition.",
          ],
          result:
            "Eliminated repeated follow-up messages and lost ticket context.",
        },
        {
          title: "End-to-End Solo Delivery",
          icon: "Workflow",
          points: [
            "Led requirements grooming, sprint planning, and daily standups.",
            "Designed, built, and tested the entire system independently.",
            "Deployed across SIT → UAT → PROD via Jenkins CI/CD pipeline.",
          ],
          result:
            "Production-ready enterprise system delivered by a single developer.",
        },
      ],
      achievements: [
        "Processing 100+ tickets/day across 3 IT divisions (was 0 before).",
        "Average resolution time reduced from 24+ hours to 2 hours.",
        "LOA approval compliance: 0% → 99%.",
        "Used daily by 50+ staff across IT Support, Infrastructure, and Product.",
        "Zero compliance violations for unapproved sensitive changes since launch.",
      ],
      demonstrates: [
        "Enterprise workflow engine design with state machine architecture.",
        "Compliance-oriented development with full audit trail.",
        "End-to-end solo product delivery in an Agile environment.",
        "Complex relational data modeling for approval workflows.",
        "Cross-division stakeholder communication and requirements gathering.",
      ],
    },
    category: "Web Dev",
    techStack: [
      "Go (Fiber)",
      "Vue.js (Quasar)",
      "PostgreSQL",
      "Workflow Engine",
      "Audit Trail",
    ],
    image: "/images/times-service-desk.png",
  },
  {
    id: "temas-wms",
    title: "Warehouse Management System (WMS)",
    shortDescription:
      "Logistics management platform. Enhanced data validation, search optimization, and inventory tracking. Reduced validation failures by 70%.",
    longDescription:
      "Enhanced an existing Warehouse Management System (WMS) to improve data integrity and operational efficiency. The platform manages container tracking, inventory staging, and logistics workflows across multiple warehouses.\n\nProblem:\n✗ Data validation failures causing incorrect shipments\n✗ Slow search and filtering of inventory items\n✗ No brand/commodity tagging → poor data organization\n✗ Referential integrity issues → orphaned records\n✗ Manual reconciliation process (very time-consuming)\n\nSolution:\n• Implemented multi-layer data validation for product rules\n• Built brand and commodity tagging system with referential integrity\n• Optimized search and filter queries using PostgreSQL indexing\n• Created batch validation workflows for periodic audits\n• Enhanced admin dashboards for inventory oversight\n\nTechnical Implementation:\n• Backend: Go (Fiber) with validation middleware\n• Database: PostgreSQL with constraints, triggers, and optimized queries\n• Frontend: Vue.js (Quasar) with advanced filtering UI\n• Performance: Query optimization reduced avg search time from 5s → 0.5s\n\nImpact:\n✓ Reduced data validation failures by 70% (fewer incorrect shipments)\n✓ Query performance improved 10x (search: 5s → 0.5s)\n✓ Inventory accuracy increased to 99.5%\n✓ Admin workload reduced through batch validation automation\n✓ Zero referential integrity issues post-implementation",
    caseStudy: {
      highlights: [
        {
          label: "Validation Failures",
          value: "↓ 70%",
          emphasis: "high",
          icon: "ShieldCheck",
        },
        {
          label: "Search Performance",
          value: "10x faster",
          emphasis: "high",
          icon: "Gauge",
        },
        {
          label: "Inventory Accuracy",
          value: "99.5%",
          emphasis: "high",
          icon: "PackageCheck",
        },
        {
          label: "Integrity Issues",
          value: "Zero post-launch",
          emphasis: "medium",
          icon: "BadgeCheck",
        },
      ],
      overview: [
        "Enhanced an enterprise Warehouse Management System used for container, inventory, and logistics tracking at PT Temas Tbk.",
        "Focused on data integrity, search performance, and operational accuracy.",
        "Improvements directly reduced incorrect shipments and admin reconciliation time.",
      ],
      problem: [
        "Data validation failures were causing incorrect shipments and downstream errors.",
        "Slow search and filter queries (avg 5s) made inventory lookup impractical at scale.",
        "No brand or commodity tagging led to poor data organization and orphaned records.",
        "Referential integrity issues created inconsistencies that required manual reconciliation.",
      ],
      solution: [
        "Implemented multi-layer data validation middleware with product rule enforcement.",
        "Built a brand and commodity tagging system with referential integrity constraints.",
        "Optimized PostgreSQL queries with proper indexing, reducing search time from 5s to 0.5s.",
        "Created batch validation workflows for periodic audits without disrupting live operations.",
        "Enhanced admin dashboards with advanced filtering UI for operational oversight.",
      ],
      architecture: {
        title: "System Architecture",
        layers: [
          {
            title: "Validation Layer",
            icon: "ShieldCheck",
            items: [
              "Multi-layer product rule validation middleware",
              "Brand and commodity tagging with referential integrity",
              "Batch validation for periodic audits",
              "Error reporting with actionable detail",
            ],
          },
          {
            title: "Search & Filter Layer",
            icon: "Search",
            items: [
              "PostgreSQL index optimization",
              "Composite filter queries (brand, commodity, status)",
              "Persistent filter state across sessions",
              "Paginated results for large datasets",
            ],
          },
          {
            title: "Admin Dashboard",
            icon: "LayoutDashboard",
            items: [
              "Advanced filtering UI (Vue.js / Quasar)",
              "Inventory overview with real-time status",
              "Batch action support for bulk updates",
              "Audit-ready export for reconciliation",
            ],
          },
          {
            title: "Data Integrity Layer",
            icon: "Database",
            items: [
              "PostgreSQL constraints and triggers",
              "Referential integrity enforcement across tables",
              "Cascading rule validation on write",
              "Orphaned record detection and cleanup",
            ],
          },
        ],
      },
      keyImplementations: [
        {
          title: "Multi-Layer Data Validation",
          icon: "ShieldCheck",
          points: [
            "Validation middleware enforces product rules before any write operation.",
            "Brand and commodity tagging system with strict referential constraints.",
            "Batch validation jobs run periodically for proactive audit compliance.",
          ],
          result:
            "Data validation failures reduced by 70%, directly cutting incorrect shipments.",
        },
        {
          title: "Query & Search Optimization",
          icon: "Gauge",
          points: [
            "PostgreSQL index strategy redesigned for composite filter queries.",
            "Slow queries identified and rewritten for optimal execution plans.",
            "Paginated result sets prevent full-table scans on large datasets.",
          ],
          result:
            "Average search time reduced from 5s to 0.5s — a 10x improvement.",
        },
        {
          title: "Referential Integrity Enforcement",
          icon: "Database",
          points: [
            "Database-level constraints prevent orphaned records at write time.",
            "Cascading rules ensure consistency across related inventory tables.",
            "Orphaned record detection script for historical data cleanup.",
          ],
          result: "Zero referential integrity issues post-implementation.",
        },
        {
          title: "Advanced Filtering UI",
          icon: "SlidersHorizontal",
          points: [
            "Multi-dimensional filter (brand, commodity, status, date range) with persistent state.",
            "Bulk action support for admin batch operations.",
            "Real-time inventory status with export capability for reconciliation.",
          ],
          result:
            "Admin workload reduced through automation and faster lookup.",
        },
      ],
      achievements: [
        "Data validation failures reduced by 70% — fewer incorrect shipments.",
        "Search performance improved 10x (5s → 0.5s average).",
        "Inventory accuracy reached 99.5%.",
        "Zero referential integrity issues since implementation.",
        "Admin reconciliation workload significantly reduced via batch automation.",
      ],
      demonstrates: [
        "Database performance tuning and query optimization.",
        "Data integrity design with constraints, triggers, and validation layers.",
        "Enterprise-scale inventory system enhancement.",
        "Backend middleware architecture for business rule enforcement.",
        "Measurable, impact-driven engineering improvements.",
      ],
    },
    category: "Web Dev",
    techStack: [
      "Go (Fiber)",
      "Vue.js (Quasar)",
      "PostgreSQL",
      "SQL Optimization",
      "Data Validation",
    ],
    image: "/images/temas-wms.png",
  },
  {
    id: "pt-winnings",
    title: "PT Winnings Harta Di Nusantara",
    shortDescription:
      "A comprehensive corporate web platform built with Laravel for enterprise resource management.",
    longDescription:
      "PT Winnings Harta Di Nusantara is a full-featured corporate website developed using the Laravel framework. The platform provides enterprise-level resource management, enabling streamlined business operations, client management, and internal workflows. Built with a focus on scalability, security, and clean UX design principles.",
    category: "Web Dev",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "/images/pt-winnings.png",
  },
  {
    id: "audio-video-recording",
    title: "Audio & Video Recording System",
    shortDescription:
      "A web-based recording system leveraging Laravel and FFMPEG for media capture and processing.",
    longDescription:
      "An advanced Audio & Video Recording System built with Laravel and integrated with FFMPEG for server-side media processing. The platform allows users to record, upload, and manage audio/video content directly from the browser. Features include real-time recording, format conversion, media compression, and a clean dashboard for managing all recorded media files.",
    category: "Web Dev",
    techStack: ["Laravel", "PHP", "FFMPEG", "JavaScript", "MySQL"],
    image: "/images/audio-video-recording.png",
  },
  {
    id: "kopi-lima",
    title: "Kopi Lima",
    shortDescription:
      "A modern coffee shop web application with online ordering capabilities built with Laravel.",
    longDescription:
      "Kopi Lima is a beautifully designed coffee shop web application built with Laravel. The platform features a modern UI for browsing the coffee menu, placing orders online, and managing the shop's inventory. The system includes an admin dashboard for order management, product catalog CRUD operations, and user authentication with role-based access control.",
    category: "Web Dev",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Alpine.js"],
    image: "/images/kopi-lima.png",
  },
  {
    id: "the-bootjack",
    title: "The BootJack",
    shortDescription:
      "A responsive web project showcasing Bootstrap and vanilla JavaScript expertise.",
    longDescription:
      "The BootJack is a responsive, visually appealing web project that demonstrates proficiency in Bootstrap framework and vanilla JavaScript. The project features responsive grid layouts, interactive UI components, smooth animations, and modern design patterns — all achieved without heavy frameworks, focusing on performance and accessibility.",
    category: "Web Dev",
    techStack: ["Bootstrap", "JavaScript", "HTML5", "CSS3"],
    image: "/images/the-bootjack.png",
  },
  {
    id: "the-fonbuk",
    title: "The Fonbuk",
    shortDescription:
      "A clean, responsive web application built with vanilla HTML/CSS and Bootstrap components.",
    longDescription:
      "The Fonbuk is a web application built using vanilla HTML, CSS, and Bootstrap. It showcases a clean and functional phone directory application with search, filter, and CRUD functionalities. The project emphasizes responsive design principles and clean code architecture using only fundamental web technologies.",
    category: "Web Dev",
    techStack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    image: "/images/the-fonbuk.png",
  },
  {
    id: "f1-fan-app",
    title: "F1 Fan App",
    shortDescription:
      "A UI/UX case study for an iOS mobile app designed for Formula 1 enthusiasts.",
    longDescription:
      "The F1 Fan App is a comprehensive UI/UX design case study for an iOS mobile application tailored for Formula 1 fans. The project includes user research, persona creation, wireframing, prototyping, and high-fidelity mockups designed in Figma. Key features include live race tracking, driver statistics, circuit information, and community features — all designed with Apple's Human Interface Guidelines in mind.",
    category: "UI/UX",
    techStack: ["Figma", "UI/UX Design", "iOS Design", "Prototyping"],
    image: "/images/f1-fan-app.png",
  },
  {
    id: "akukatsoe",
    title: "AkuKatsoe",
    shortDescription:
      "An F&B entrepreneurship venture blending business strategy with digital marketing.",
    longDescription:
      "AkuKatsoe is an entrepreneurial venture in the Food & Beverage industry. The project involved full business development from concept ideation, market research, branding, and digital marketing strategy to operational execution. The experience provided hands-on knowledge in business planning, supply chain management, customer acquisition, social media marketing, and financial management in a real-world business context.",
    category: "Business",
    techStack: [
      "Business Planning",
      "Digital Marketing",
      "Branding",
      "F&B Operations",
    ],
    image: "/images/akukatsoe.png",
  },
];
