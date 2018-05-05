<template>
    <div>
        <Example>
            <Dropdown transfer>
                <Button type="text" slot="handle">handler</Button>
                <DropdownMenu>
                    <DropdownMenuItem>item1</DropdownMenuItem>
                    <DropdownMenuItem>item2</DropdownMenuItem>
                    <DropdownMenuItem disabled>item3</DropdownMenuItem>
                    <DropdownMenuItem>item4</DropdownMenuItem>
                    <DropdownMenuItem divided>item5</DropdownMenuItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown transfer placement="bottom-right">
                <Button type="text" slot="handle">handler</Button>
                <DropdownMenu>
                    <DropdownMenuItem>item1</DropdownMenuItem>
                    <DropdownMenuItem>item2</DropdownMenuItem>
                    <DropdownMenuItem disabled>item3</DropdownMenuItem>
                    <DropdownMenuItem>item4</DropdownMenuItem>
                    <DropdownMenuItem divided>item5</DropdownMenuItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown transfer placement="top-left">
                <Button type="text" slot="handle">handler</Button>
                <DropdownMenu>
                    <DropdownMenuItem>item1</DropdownMenuItem>
                    <DropdownMenuItem>item2</DropdownMenuItem>
                    <DropdownMenuItem disabled>item3</DropdownMenuItem>
                    <DropdownMenuItem>item4</DropdownMenuItem>
                    <DropdownMenuItem divided>item5</DropdownMenuItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown transfer placement="top-right">
                <Button type="text" slot="handle">handler</Button>
                <DropdownMenu>
                    <DropdownMenuItem>item1</DropdownMenuItem>
                    <DropdownMenuItem>item2</DropdownMenuItem>
                    <DropdownMenuItem disabled>item3</DropdownMenuItem>
                    <DropdownMenuItem>item4</DropdownMenuItem>
                    <DropdownMenuItem divided>item5</DropdownMenuItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown>
                <a slot="handle">hanlder</a>
                Dropdown
            </Dropdown>
        </Example>
        <Example>
            <Dropdown>
                <a slot="handle">bottom left</a>
                <DropdownMenu>
                    <DropdownMenuItem>item1</DropdownMenuItem>
                    <DropdownMenuItem>item2</DropdownMenuItem>
                    <DropdownMenuItem disabled>item3</DropdownMenuItem>
                    <DropdownMenuItem>item4</DropdownMenuItem>
                    <DropdownMenuItem divided>item5</DropdownMenuItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown placement="top-right" transfer>
                <a slot="handle">top right</a>
                <DropdownMenu>
                    <DropdownMenuItem>item1</DropdownMenuItem>
                    <DropdownMenuItem>item2</DropdownMenuItem>
                    <DropdownMenuItem disabled>item3</DropdownMenuItem>
                    <DropdownMenuItem>item4</DropdownMenuItem>
                    <DropdownMenuItem divided>item5</DropdownMenuItem>
                </DropdownMenu>
            </Dropdown>
        </Example>
    </div>

</template>

<script>
    export default {
        name: 'DocumentDropdown'
    };
</script>

<style scoped>

</style>