# 🚀 Hướng Dẫn Khởi Tạo Dự Án & Cấu Trúc Thư Mục Chuẩn (Project Blueprint)

> **Kiến trúc áp dụng**: Feature-Driven & Clean Architecture (Next.js 15+ App Router / React + Vite / Fullstack Frontend).  
> **Mục tiêu**: Chuẩn hóa quy trình khởi tạo, module hóa nghiệp vụ, có thể nhân bản và dùng chung cho mọi dự án tiếp theo.

---

## MỤC LỤC

1. [Quy Trình Khởi Tạo Từng Bước](#1-quy-trình-khởi-tạo-từng-bước)
2. [Cấu Trúc Thư Mục Dùng Chung](#2-cấu-trúc-thư-mục-dùng-chung)
3. [Chi Tiết Vai Trò & Phân Tầng Thư Mục](#3-chi-tiết-vai-trò--phân-tầng-thư-mục)
4. [Mã Nguồn Mẫu Cho Các Base Files](#4-mã-nguồn-mẫu-cho-các-base-files)
5. [Script Tự Động Khởi Tạo Trong 1 Giây](#5-script-tự-động-khởi-tạo-trong-1-giây)
6. [Các Quy Tắc Vàng Khi Phát Triển](#6-các-quy-tắc-vàng-khi-phát-triển)

---

## 1. QUY TRÌNH KHỞI TẠO TỪNG BƯỚC

### Bước 1: Khởi tạo dự án gốc

Mở terminal và chạy lệnh khởi tạo (khuyến nghị Next.js với TypeScript, Tailwind CSS, App Router):

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd my-app
```

---

### Bước 2: Cài đặt các thư viện tiêu chuẩn theo phân tầng

#### 1. UI Primitives & Styling (Atomic Design)

```bash
npm i clsx tailwind-merge class-variance-authority lucide-react
```

#### 2. Form Handling & Data Validation

```bash
npm i react-hook-form zod @hookform/resolvers
```

#### 3. State Management & Data Fetching (Tùy chọn theo dự án)

```bash
npm i @tanstack/react-query zustand axios
```

#### 4. Animation & Micro-interactions (Tùy chọn)

```bash
npm i motion gsap
```

#### 5. Công cụ chuẩn hóa Code (DevDependencies)

```bash
npm i -D prettier prettier-plugin-tailwindcss
```

---

## 2. CẤU TRÚC THƯ MỤC DÙNG CHUNG

```plaintext
my-project/
├── public/                     # Tài nguyên tĩnh (images, icons, fonts, favicon)
│   ├── images/
│   └── icons/
├── src/
│   ├── app/                    # ROUTING LAYER (Next.js App Router)
│   │   ├── (auth)/             # Route group: đăng nhập, đăng ký
│   │   ├── (dashboard)/        # Route group: trang quản trị
│   │   ├── api/                # API route handlers
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Trang chủ
│   │   ├── loading.tsx         # Root loading state
│   │   ├── error.tsx           # Root error boundary
│   │   ├── not-found.tsx       # 404 page
│   │   └── globals.css         # CSS toàn cục
│   │
│   ├── components/             # SHARED PRESENTATIONAL COMPONENTS
│   │   ├── ui/                 # 1. Atomic UI components (Buttons, Inputs, Cards, Modals, Badges)
│   │   ├── common/             # 2. Shared composite widgets (Breadcrumbs, EmptyState, Loader, BrandLogo)
│   │   ├── layout/             # 3. Layout shells (Header, Footer, Sidebar, Container)
│   │   └── index.ts            # Barrel export
│   │
│   ├── features/               # BUSINESS DOMAIN MODULES (Feature-driven)
│   │   ├── [feature-name]/     # Ví dụ: auth, products, cart, checkout, orders
│   │   │   ├── components/     # UI đặc thù chỉ dùng trong feature này
│   │   │   ├── hooks/          # Custom hooks phục vụ logic feature này
│   │   │   ├── services/       # Gọi API / Data processing cho feature này
│   │   │   ├── types/          # Kiểu dữ liệu / DTO / Zod Schema của feature
│   │   │   ├── utils/          # Hàm tính toán riêng của feature
│   │   │   └── index.ts        # Public API (chỉ export những gì bên ngoài cần)
│   │
│   ├── hooks/                  # GLOBAL HOOKS (Dùng chung toàn app, không gắn nghiệp vụ)
│   │   ├── useDebounce.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useLocalStorage.ts
│   │   └── index.ts
│   │
│   ├── context/ (hoặc stores/) # GLOBAL STATE (React Context hoặc Zustand Stores)
│   │   ├── ThemeContext.tsx
│   │   ├── LanguageContext.tsx
│   │   └── index.ts
│   │
│   ├── lib/                    # 3RD PARTY WRAPPERS & INSTANCES
│   │   ├── cn.ts               # Tailwind merge utility
│   │   ├── axios.ts            # Axios instance (interceptors, headers)
│   │   ├── query-client.ts     # TanStack Query client config
│   │   └── index.ts
│   │
│   ├── services/               # GLOBAL / BASE SERVICES
│   │   ├── api.client.ts       # Base HTTP Fetcher / Wrapper
│   │   └── index.ts
│   │
│   ├── constants/              # CONFIG HẰNG SỐ BẤT BIẾN
│   │   ├── routes.ts           # URL paths tập trung (tránh hardcode string)
│   │   ├── storage-keys.ts     # Key lưu Cookie / LocalStorage
│   │   ├── regex.ts            # Pattern kiểm tra dữ liệu
│   │   └── index.ts
│   │
│   ├── config/                 # APP CONFIGURATION
│   │   ├── site.ts             # Metadata SEO, tên trang, social links
│   │   ├── env.ts              # Validate biến môi trường bằng Zod
│   │   └── index.ts
│   │
│   ├── types/                  # GLOBAL TYPES / SHARED INTERFACES
│   │   ├── common.ts           # ApiResponse<T>, Pagination, BaseEntity
│   │   └── index.ts
│   │
│   └── utils/                  # PURE UTILITY FUNCTIONS (Không chứa React logic)
│       ├── format.ts           # formatCurrency, formatDate, formatNumber
│       ├── validation.ts       # Helper validate dữ liệu
│       └── index.ts
│
├── .env.example                # File mẫu biến môi trường
├── .env.local                  # Biến môi trường local (không push git)
├── .prettierrc                 # Cấu hình format code
├── tsconfig.json               # Cấu hình TypeScript & Path Alias
└── package.json
```

---

## 3. CHI TIẾT VAI TRÒ & PHÂN TẦNG THƯ MỤC

| Thư mục                  | Vai trò                                                                                                                            | Tái sử dụng sang dự án khác? |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :--------------------------: |
| `src/components/ui/`     | **Design System Primitives**: Button, Input, Modal, Badge, Dropdown... Không dính dáng logic kinh doanh.                           | **Rất cao (Copy dùng ngay)** |
| `src/components/common/` | Các widget tổng hợp tái sử dụng: Breadcrumbs, EmptyState, SectionTitle, Loader.                                                    |           **Cao**            |
| `src/components/layout/` | Khung hiển thị giao diện: Header, Footer, Sidebar, Navigation, Container.                                                          |     **Trung bình - Cao**     |
| `src/features/`          | **Trái tim nghiệp vụ**: Đóng gói từng domain (auth, cart, product). Module hóa độc lập, không import xuyên chéo vào ruột của nhau. |     **Theo từng module**     |
| `src/lib/`               | Cấu hình & wrapper các SDK ngoài (`axios`, `i18n`, `cn.ts`). Thay đổi thư viện ngoài không làm vỡ code UI.                         |         **Rất cao**          |
| `src/constants/`         | Tập trung toàn bộ routes, keys, endpoints. Tuyệt đối không hardcode link trực tiếp trong component.                                |         **Rất cao**          |
| `src/utils/`             | Các hàm thuần túy (pure functions): chỉ nhận input và trả về output.                                                               |         **Rất cao**          |
| `src/types/`             | Kiểu dữ liệu dùng chung (phân trang, response HTTP, entity cơ bản).                                                                |         **Rất cao**          |

---

## 4. MÃ NGUỒN MẪU CHO CÁC BASE FILES

### 1. `src/lib/cn.ts` (Tailwind Class Merging)

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 2. `src/constants/routes.ts` (Quản lý Routes tập trung)

```typescript
export const ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
  },
  PRODUCTS: {
    LIST: "/products",
    DETAIL: (slug: string) => `/products/${slug}`,
  },
  CART: "/cart",
  CHECKOUT: "/checkout",
  DASHBOARD: "/dashboard",
} as const;
```

### 3. `src/config/env.ts` (Type-safe Environment Variables)

```typescript
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().default("http://localhost:3000/api"),
  NEXT_PUBLIC_APP_NAME: z.string().default("My Application"),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
});
```

### 4. `src/types/common.ts` (Global Types)

```typescript
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}
```

### 5. `.prettierrc`

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## 5. SCRIPT TỰ ĐỘNG KHỞI TẠO TRONG 1 GIÂY

Chỉ cần chạy lệnh sau tại thư mục gốc dự án để tạo toàn bộ khung thư mục và file cơ sở:

### Cho Windows (PowerShell):

```powershell
New-Item -ItemType Directory -Force -Path @(
  "src/app",
  "src/components/ui",
  "src/components/common",
  "src/components/layout",
  "src/features",
  "src/hooks",
  "src/context",
  "src/lib",
  "src/services",
  "src/constants",
  "src/config",
  "src/types",
  "src/utils"
) | Out-Null; `
New-Item -ItemType File -Force -Path @(
  "src/lib/cn.ts",
  "src/constants/routes.ts",
  "src/constants/index.ts",
  "src/types/common.ts",
  "src/types/index.ts",
  "src/utils/format.ts",
  "src/utils/index.ts",
  "src/config/env.ts",
  "src/config/site.ts",
  ".env.example"
) | Out-Null
```

### Cho macOS / Linux / Git Bash:

```bash
mkdir -p src/{app,components/{ui,common,layout},features,hooks,context,lib,services,constants,config,types,utils} \
&& touch src/lib/cn.ts src/constants/routes.ts src/constants/index.ts src/types/common.ts src/types/index.ts src/utils/format.ts src/utils/index.ts src/config/env.ts src/config/site.ts .env.example
```

---

## 6. CÁC QUY TẮC VÀNG KHI PHÁT TRIỂN

1. **Nguyên tắc Barrel Export (`index.ts`)**:
   - Mọi thư mục con (`ui`, `hooks`, `utils`, `features/xyz`) nên có file `index.ts`.
   - Giúp việc import luôn ngắn gọn và sạch sẽ:
     ```typescript
     // Tốt:
     import { Button, Input } from "@/components/ui";
     // Tránh:
     import { Button } from "@/components/ui/Button";
     import { Input } from "@/components/ui/Input";
     ```

2. **Cách ly Feature (Feature Boundaries)**:
   - Module `features/cart` **không được** import thẳng vào file nội bộ của `features/products/services/api.ts`.
   - Mọi tương tác giữa các feature phải thông qua file `index.ts` công khai của feature đó.

3. **Tách biệt UI và Logic (Presentation vs Logic)**:
   - Component trong `src/components/ui/` chỉ nhận props và render giao diện.
   - Các logic gọi API, xử lý state phức tạp, tính toán công thức phải được đưa vào custom hook hoặc service class.

4. **Không Hardcode URL**:
   - Luôn sử dụng biến `ROUTES` từ `@/constants/routes` thay vì gõ tay chuỗi đường dẫn trong thẻ `Link` hoặc hàm navigate.
