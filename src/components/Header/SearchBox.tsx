import { useContext, useRef } from "react";

import { ThemeContext } from "../../services/contexts/ThemeContext";

import { Flex, Icon, Input } from "@chakra-ui/react";

import { RiSearchLine } from "react-icons/ri";

// debounce -> Faz com que a busca seja feita após o usuário terminar de digitar

// ControllerComponent => permite controlar o estado do componente para
// const [search, setSearch] = useState('');
// dentro do input inserir 
// value={search}
// onChange={() => setSearch(event.target.value)}

// Uncontrolled the search input - Imperativa vs Declativa 
// searchInputRef.current.focus() (Imperativo) 
// 
// 
interface SearchBoxProps {
  showSearchBox?: boolean;
}

export function SearchBox({ showSearchBox }: SearchBoxProps) {
  const { backgroundPrimary, textColor } = useContext(ThemeContext);
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      {
        showSearchBox &&
        (
          <Flex
            as="label"
            flex="1"
            py="4"
            px="6"
            ml="8"
            bg={backgroundPrimary}
            maxWidth={400}
            color={textColor}
            alignSelf="center"
            position="relative"
            borderRadius="7"
          >
            <Input
              color={textColor}
              variant="unstyled"
              px="4"
              mr="3"
              placeholder="Buscar chamado..."
              _placeholder={{ textColor }}
              ref={searchInputRef}
            />

            <Icon as={RiSearchLine} fontSize="20" />
          </Flex>
        )
      }
    </>
  );
}
