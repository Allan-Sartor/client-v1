import { Stack } from "@chakra-ui/react";
import { useContext } from "react";
import { RiTaskLine, RiDashboardLine, RiBarChartBoxLine, RiArchiveLine, RiScissorsLine, RiTeamLine } from "react-icons/ri";
import { AuthContext } from "../../services/contexts/AuthContext";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  const { user } = useContext(AuthContext);

  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="ACOMPANHAMENTO">
        {user ?
          user.admin == true ?
            <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink> : ''
          : ''}
        <NavLink icon={RiBarChartBoxLine} href="/indicators">Indicadores do dia</NavLink>
      </NavSection>

      {user ?
        user.admin == true ?
          <NavSection title="GERENCIAMENTO">
            <NavLink icon={RiTeamLine} href="/users">Usuários</NavLink>
            <NavLink icon={RiArchiveLine} href="/ticket-management">Produtos</NavLink>
            <NavLink icon={RiScissorsLine} href="/ticket-management">Serviços</NavLink>
          </NavSection> : ''
        : ''}
    </Stack>
  );
}