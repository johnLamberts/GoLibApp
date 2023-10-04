import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminLayouts from "./layouts/AdminLayouts";
import Dashboard from "./pages/Dashboard";
import StudentMember from "./pages/StudentMember";
import { ThemeProvider } from "./themes/themes-provider";
import ContentSettings from "./pages/ContentSettings";
import Maintenance from "./pages/Maintenance";
import Authors from "./features/Settings/ContentSettings/Authors/Authors";
import Genres from "./features/Settings/ContentSettings/Genres/Genres";
import ThemeSwitcher from "./_components/theme-switcher";
import { ThemeWrapper } from "./_components/theme-wrapper";
import GradeLevel from "./features/Settings/ContentSettings/GradeLevel/GradeLevel";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <BrowserRouter>
          <ThemeWrapper>
            <ThemeSwitcher />
            <Routes>
              <Route element={<AdminLayouts />}>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="student-member" element={<StudentMember />} />
                <Route path="content-settings" element={<ContentSettings />} />
                <Route path="maintenance-settings" element={<Maintenance />}>
                  <Route
                    index
                    element={
                      <Navigate replace to="/maintenance-settings/genre" />
                    }
                  />
                  <Route
                    path="/maintenance-settings/author"
                    element={<Authors />}
                  />
                  <Route
                    path="/maintenance-settings/genre"
                    element={<Genres />}
                  />
                  <Route
                    path="/maintenance-settings/grade-level"
                    element={<GradeLevel />}
                  />
                </Route>
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </ThemeWrapper>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
