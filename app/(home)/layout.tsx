export const metadata = {
  title:
    "软考通关宝典 | 软考知识库 | 软考教程 | 软考报名 | 软考成绩 | 软考证书",
  description:
    "软考通关宝典提供掘金高效率工具计划、倒计时页面、信息系统项目管理师、系统集成项目管理工程师、系统规划与管理师、网络工程师、信息安全工程师等考试的在线培训、考试资讯、免费知识库等考试服务，是一个拥有独立创新的专业学习网站。",
  keywords: [
    "软考报名入口官网",
    "软考成绩查询",
    "软考官网",
    "软考报名",
    "网络工程师",
    "计算机软考",
    "软考",
    "软考通关宝典",
    "软考报名资料",
  ],
};

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="container mx-auto grid items-start gap-10 py-8">
      {children}
    </div>
  );
}
